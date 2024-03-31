const root = document.location.host;
const tampilCard = (keyword = '') => {
    fetch('../data/siswa.json')
        .then(response => response.json())
        .then(json => {
            const allStudents = json;
            let html = '';
            const kelas = document.querySelector('title').dataset.kelas;
            const students = [];
            const tempatCard = document.querySelector('#daftar-peserta-didik');

            if (!keyword instanceof String) {
                keyword = '';
            }

            allStudents.forEach(student => {
                const nama = student.nama.toLowerCase();
                // let index;

                if (student.image.length == 0) {
                    student.image = '../img/default.jpg';
                } else {
                    student.image = `../img/pesdik/${student.image}`;
                }

                if (nama.includes(keyword) && keyword.length != 0) {
                    students.push(student);

                    html += `
                    <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
                        <div class="card">
                            <img src="${student.image}" class="card-img-top" alt="${student.nama}">
                            <div class="card-body text-center">
                                <h5 class="card-title">${student.nama}</h5>
                                <button class="btn btn-primary" data-bs-toggle="modal"
                                    data-bs-target="#detail">Detail</button>
                            </div>
                        </div>
                    </div>
                    `;
                } else if (keyword.length == 0 && student.kelas == kelas) {
                    students.push(student);
                    html += `
                    <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
                        <div class="card">
                            <img src="${student.image}" class="card-img-top" alt="${student.nama}">
                            <div class="card-body text-center">
                                <h5 class="card-title">${student.nama}</h5>
                                <button class="btn btn-primary" data-bs-toggle="modal"
                                    data-bs-target="#detail">Detail</button>
                            </div>
                        </div>
                    </div>
                    `;
                }
            });

            if (students.length == 0) {
                html = `
                    <div class="col">
                        <div class="alert alert-danger text-center" role="alert">
                            <h4>Siswa yang dicari tidak ditemukan!</h4>
                            <p>Pastikan nama siswa yang dicari sudah benar</p>
                        </div>
                    </div>
                `;
            }

            tempatCard.innerHTML = html;

            tampilDetail(students);

        });
};

const cariSiswa = () => {
    const search = document.querySelector('input#search');
    search.addEventListener('input', function () {
        let keyword = this.value.toLowerCase();
        window.scrollTo(0, 0);
        tampilCard(keyword);
    })
}

const tampilDetail = students => {

    const modalButtons = document.querySelectorAll('button[data-bs-toggle="modal"]');
    students.forEach((student, index) => {
        modalButtons[index].addEventListener('click', function () {
            const modal = document.querySelector('#detail-peserta-didik');
            const image = document.querySelector('#detail-foto-peserta-didik');


            let html = `
                <li class="list-group-item"><b>Nama Lengkap :</b> ${student.nama}</li>
                <li class="list-group-item"><b>Kelas :</b> ${student.kelas}</li>
                <li class="list-group-item"><b>Tanggal Lahir :</b> ${student.ttl}</li>
                <li class="list-group-item"><b>Di Kelas Sebagai :</b> ${student.jabatan}</li>
                <li class="list-group-item"><b>Pernah Menjadi :</b> ${student.ekstra}</li>
                <li class="list-group-item"><b>Kesan Selama Bersekolah di MAN Kapuas :</b>
                    <figure>
                        <blockquote class="blockquote">
                            <p class="pesan-kesan">${student.kesan}</p>
                        </blockquote>
                        <figcaption class="blockquote-footer">
                            <cite title="${student.nama}">${student.nama}</cite> kelas ${student.kelas}
                        </figcaption>
                    </figure>
                </li>
                <li class="list-group-item"><b>Pesan Untuk Semua Orang :</b>
                    <figure>
                        <blockquote class="blockquote">
                            <p class="pesan-kesan">${student.pesan}</p>
                        </blockquote>
                        <figcaption class="blockquote-footer">
                            <cite title="${student.nama}">${student.nama}</cite> kelas ${student.kelas}
                        </figcaption>
                    </figure>
                </li>
                `;

            modal.innerHTML = html;

            image.setAttribute('src', student.image);
        })
    });

}

const load = () => {
    tampilCard();
    cariSiswa();
}

document.body.onload = load;