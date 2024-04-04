const root = document.location.host;
const tampilCard = (keyword = '') => {
    fetch('../data/siswa.json')
        .then(response => response.json())
        .then(json1 => {
            fetch('../data/guru.json')
                .then(response => response.json())
                .then(json2 => {
                    const allStudents = json1;
                    const allTeachers = json2;
                    let html = '';
                    let htmlWalkel = '';
                    const kelas = document.querySelector('title').dataset.kelas;
                    const students = [];
                    const walkel = [];
                    const tempatCard = document.querySelector('#daftar-peserta-didik');
                    const tempatWaliKelas = document.querySelector('#wali-kelas');
                    const titleWalkel = document.querySelector('#title-walkel');
                    const titlePesdik = document.querySelector('#title-pesdik');

                    if (!keyword instanceof String) {
                        keyword = '';
                    }

                    allTeachers.forEach(teacher => {
                        if (teacher.jabatan == `Wali Kelas ${kelas}`) {
                            if (teacher.image.length == 0) {
                                teacher.image = '../img/default.jpg';
                            } else {
                                teacher.image = `../img/guru/${teacher.image}`;
                            }

                            htmlWalkel += `
                                <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
                                    <div class="card">
                                        <img src="${teacher.image}" class="card-img-top" alt="${teacher.nama}">
                                        <div class="card-body text-center">
                                            <h5 class="card-title">${teacher.nama}</h5>
                                            <button class="btn btn-primary" data-bs-toggle="modal" data-walkel="${kelas}"
                                                data-bs-target="#detail">Detail</button>
                                        </div>
                                    </div>
                                </div>
                            `;

                            walkel.push(teacher)
                        }

                    });

                    allStudents.forEach(student => {
                        const nama = student.nama.toLowerCase();

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
                    tempatWaliKelas.innerHTML = htmlWalkel;
                    titleWalkel.innerHTML = `Wali Kelas ${kelas}`
                    titlePesdik.innerHTML = `Kelas ${kelas}`

                    tampilDetail(students, walkel);
                });
        })

};

const cariSiswa = () => {
    const search = document.querySelector('input#search');
    const tempatWaliKelas = document.querySelectorAll('div.justify-content-center:first-child, div.justify-content-center:nth-child(2)');
    search.addEventListener('input', function () {
        let keyword = this.value.toLowerCase();

        tempatWaliKelas.forEach(tempat => {
            if (keyword.length == 0) {
                tempat.classList.remove('d-none');
            } else {
                tempat.classList.add('d-none');
            }
        })

        window.scrollTo(0, 0);
        tampilCard(keyword);
    })
}

const tampilDetail = (students, teachers) => {

    const modalButtons = document.querySelectorAll('button[data-bs-toggle="modal"]');
    const image = document.querySelector('#detail-foto');
    let index = 0;

    teachers.forEach(teacher => {
        modalButtons[index].addEventListener('click', function () {
            const modal = document.querySelector('#detail-peserta-didik');
            let html = `
                <li class="list-group-item"><b>Nama Lengkap :</b> ${teacher.nama}</li>
                <li class="list-group-item"><b>Sebagai :</b> ${teacher.jabatan}</li>
                <li class="list-group-item"><b>Pernah Menjadi :</b> ${teacher.ekstra}</li>
                `;

            modal.innerHTML = html;

            image.setAttribute('src', teacher.image);
        })
        index++;
    })

    students.forEach(student => {
        modalButtons[index].addEventListener('click', function () {
            const modal = document.querySelector('#detail-peserta-didik');
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
        });
        index++
    });

}

const load = () => {
    tampilCard();
    cariSiswa();
}

document.body.onload = load;