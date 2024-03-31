const root = document.location.host;
const tampilCard = (keyword = '') => {
    fetch('../data/guru.json')
        .then(response => response.json())
        .then(json => {
            const allTeachers = json;
            const teachers = [];
            const kamad = document.querySelector('#kepala-madrasah');
            const kepalaTU = document.querySelector('#kepala-tata-usaha');
            const wakamad = document.querySelector('#wakil-kepala-madrasah');
            const staff = document.querySelector('#staff-tata-usaha');
            const waliKelas = document.querySelector('#wali-kelas');
            const dewanGuru = document.querySelector('#dewan-guru');
            const kebersihanKeamanan = document.querySelector('#kebersihan-dan-keamanan');
            const search = document.querySelector('#pencarian');
            const nonSearch = document.querySelector('#non-pencarian');
            const hasilPencarian = document.querySelector('#hasil-pencarian');
            let htmlKamad = '';
            let htmlKepalaTU = '';
            let htmlWakamad = '';
            let htmlStaff = '';
            let htmlWaliKelas = '';
            let htmlDewanGuru = '';
            let htmlKebersihanKeamanan = '';
            let htmlSearch = ``;

            if (!keyword instanceof String) {
                keyword = '';
            }

            allTeachers.forEach(teacher => {
                const nama = teacher.nama.toLowerCase();

                if (teacher.image.length == 0) {
                    teacher.image = 'img/default.jpg';
                } else {
                    teacher.image = `img/guru/${teacher.image}`;
                }

                if (nama.includes(keyword) && keyword.length != 0) {
                    teachers.push(teacher);

                    htmlSearch += `
                    <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
                        <div class="card">
                            <img src="${teacher.image}" class="card-img-top" alt="${teacher.nama}">
                            <div class="card-body text-center">
                                <h5 class="card-title">${teacher.nama}</h5>
                                <button class="btn btn-primary" data-bs-toggle="modal"
                                    data-bs-target="#detail">Detail</button>
                            </div>
                        </div>
                    </div>
                    `;
                } else if (keyword.length == 0) {
                    let jabatan = teacher.jabatan.toLowerCase().replaceAll(' ', '-');

                    teachers.push(teacher);
                    switch (checkJabatan(jabatan)) {
                        case 'kepala-madrasah':
                            htmlKamad += `
                                <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
                                    <div class="card">
                                        <img src="${teacher.image}" class="card-img-top" alt="${teacher.nama}">
                                        <div class="card-body text-center">
                                            <h5 class="card-title">${teacher.nama}</h5>
                                            <button class="btn btn-primary" data-bs-toggle="modal"
                                                data-bs-target="#detail">Detail</button>
                                        </div>
                                    </div>
                                </div>
                                `;
                            break;
                        case 'kepala-tata-usaha':
                            htmlKepalaTU += `
                                <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
                                    <div class="card">
                                        <img src="${teacher.image}" class="card-img-top" alt="${teacher.nama}">
                                        <div class="card-body text-center">
                                            <h5 class="card-title">${teacher.nama}</h5>
                                            <button class="btn btn-primary" data-bs-toggle="modal"
                                                data-bs-target="#detail">Detail</button>
                                        </div>
                                    </div>
                                </div>
                                `;
                            break;
                        case 'wakil-kepala-madrasah':
                            htmlWakamad += `
                                <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
                                    <div class="card">
                                        <img src="${teacher.image}" class="card-img-top" alt="${teacher.nama}">
                                        <div class="card-body text-center">
                                            <h5 class="card-title">${teacher.nama}</h5>
                                            <button class="btn btn-primary" data-bs-toggle="modal"
                                                data-bs-target="#detail">Detail</button>
                                        </div>
                                    </div>
                                </div>
                                `;
                            break;
                        case 'staff-tata-usaha':
                            htmlStaff += `
                                <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
                                    <div class="card">
                                        <img src="${teacher.image}" class="card-img-top" alt="${teacher.nama}">
                                        <div class="card-body text-center">
                                            <h5 class="card-title">${teacher.nama}</h5>
                                            <button class="btn btn-primary" data-bs-toggle="modal"
                                                data-bs-target="#detail">Detail</button>
                                        </div>
                                    </div>
                                </div>
                                `;
                            break;
                        case 'wali-kelas':
                            htmlWaliKelas += `
                                <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
                                    <div class="card">
                                        <img src="${teacher.image}" class="card-img-top" alt="${teacher.nama}">
                                        <div class="card-body text-center">
                                            <h5 class="card-title">${teacher.nama}</h5>
                                            <button class="btn btn-primary" data-bs-toggle="modal"
                                                data-bs-target="#detail">Detail</button>
                                        </div>
                                    </div>
                                </div>
                                `;
                            break;
                        case 'dewan-guru':
                            htmlDewanGuru += `
                                <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
                                    <div class="card">
                                        <img src="${teacher.image}" class="card-img-top" alt="${teacher.nama}">
                                        <div class="card-body text-center">
                                            <h5 class="card-title">${teacher.nama}</h5>
                                            <button class="btn btn-primary" data-bs-toggle="modal"
                                                data-bs-target="#detail">Detail</button>
                                        </div>
                                    </div>
                                </div>
                                `;
                            break;
                        case 'kebersihan-dan-keamanan':
                            htmlKebersihanKeamanan += `
                                <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
                                    <div class="card">
                                        <img src="${teacher.image}" class="card-img-top" alt="${teacher.nama}">
                                        <div class="card-body text-center">
                                            <h5 class="card-title">${teacher.nama}</h5>
                                            <button class="btn btn-primary" data-bs-toggle="modal"
                                                data-bs-target="#detail">Detail</button>
                                        </div>
                                    </div>
                                </div>
                                `;
                            break;
                    }



                }
            });

            if (teachers.length == 0) {
                htmlSearch += `
                    <div class="col">
                        <div class="alert alert-danger text-center" role="alert">
                            <h4>Guru yang dicari tidak ditemukan!</h4>
                            <p>Pastikan nama guru yang dicari sudah benar</p>
                        </div>
                    </div>
                `;


            }

            if (keyword.length == 0) {
                kamad.innerHTML = htmlKamad;
                kepalaTU.innerHTML = htmlKepalaTU;
                wakamad.innerHTML = htmlWakamad;
                staff.innerHTML = htmlStaff;
                waliKelas.innerHTML = htmlWaliKelas;
                dewanGuru.innerHTML = htmlDewanGuru;
                kebersihanKeamanan.innerHTML = htmlKebersihanKeamanan;

                search.classList.add('d-none');
                nonSearch.classList.remove('d-none');
            } else {
                htmlSearch += '</div>';
                nonSearch.classList.add('d-none');
                search.classList.remove('d-none');
                hasilPencarian.innerHTML = htmlSearch;
            }

            tampilDetail(teachers);

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

const tampilDetail = teachers => {

    const modalButtons = document.querySelectorAll('button[data-bs-toggle="modal"]');
    teachers.forEach((teacher, index) => {
        modalButtons[index].addEventListener('click', function () {
            const modal = document.querySelector('#detail-guru');
            const image = document.querySelector('#detail-foto-guru');


            let html = `
                <li class="list-group-item"><b>Nama Lengkap :</b> ${teacher.nama}</li>
                <li class="list-group-item"><b>Sebagai :</b> ${teacher.jabatan}</li>
                <li class="list-group-item"><b>Pernah Menjadi :</b> ${teacher.ekstra}</li>
                `;

            modal.innerHTML = html;

            image.setAttribute('src', teacher.image);
        })
    });
}

const checkJabatan = jabatan => {
    let newJabatan;
    switch (jabatan) {
        case 'guru-bp/bk':
            jabatan = 'dewan-guru';
            break;

        case 'wakamad-sarana-dan-prasarana':
            jabatan = 'wakil-kepala-madrasah';
            break;

        case 'wakamad-kesiswaan':
            jabatan = 'wakil-kepala-madrasah';
            break;

        case 'wakamad-kurikulum':
            jabatan = 'wakil-kepala-madrasah';
            break;

        case 'wakamad-humas':
            jabatan = 'wakil-kepala-madrasah';
            break;

        case 'wali-kelas-xii-ipa-1':
            jabatan = 'wali-kelas';
            break;

        case 'wali-kelas-xii-ipa-2':
            jabatan = 'wali-kelas';
            break;

        case 'wali-kelas-xii-ipa-3':
            jabatan = 'wali-kelas';
            break;

        case 'wali-kelas-xii-ipa-4':
            jabatan = 'wali-kelas';
            break;

        case 'wali-kelas-xii-ips-1':
            jabatan = 'wali-kelas';
            break;

        case 'wali-kelas-xii-ips-2':
            jabatan = 'wali-kelas';
            break;

        case 'wali-kelas-xii-ips-3':
            jabatan = 'wali-kelas';
            break;

        case 'wali-kelas-xii-pai':
            jabatan = 'wali-kelas';
            break;
    }
    return jabatan;
}

const load = () => {
    tampilCard();
    cariSiswa();
}

document.body.onload = load;