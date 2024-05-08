const scroll = () => {
    const navbar = document.querySelector('nav');

    if (window.innerWidth > 1000) {
        navbar.classList.remove('bg-secondary');
        window.addEventListener('scroll', e => {
            const galleryContainer = document.querySelector('.gallery');
            const galleryCards = document.querySelectorAll('.gallery-card');
            if (galleryContainer.getBoundingClientRect().top < 400) {
                galleryCards.forEach((card, index) => {
                    setTimeout(() => {
                        card.classList.add('show');
                        galleryModal();
                    }, 500 * (index + 1));
                })
            }

            if (window.scrollY == 0) {
                navbar.classList.remove('bg-secondary');
                navbar.style.backgroundColor = 'transparent';
            } else {
                navbar.classList.add('bg-secondary');
            }
        })
    } else {
        window.addEventListener('scroll', e => {
            const galleryContainer = document.querySelector('.gallery');
            const galleryCards = document.querySelectorAll('.gallery-card');
            if (galleryContainer.getBoundingClientRect().top < 400) {
                galleryCards.forEach((card, index) => {
                    setTimeout(() => {
                        card.classList.add('show');
                        galleryModal();
                    }, 500 * (index + 1));
                })
            }
        })
    }
}

const windowResize = () => {
    const navbar = document.querySelector('nav');
    window.addEventListener('resize', e => {
        if (window.innerWidth < 1000) {
            navbar.classList.add('bg-secondary');
        } else {
            navbar.classList.remove('bg-secondary');
        }
    })
}

const galleryModal = () => {
    const modalTitle = document.querySelector('#galleryModalLabel');
    const modalImage = document.querySelector('.modal-body img');
    const modalDownload = document.querySelector('a#download-image');
    const imgThumbnails = document.querySelectorAll('.gallery-card img');
    imgThumbnails.forEach(imgThumbnail => {
        imgThumbnail.addEventListener('click', function () {
            const src = imgThumbnail.src;
            const title = this.dataset.title;

            modalTitle.innerHTML = title;
            modalImage.src = modalDownload.href = src;
        });
    });
};

const gallery = () => {
    const gallery = document.querySelector('#gallery-card');
    let html = '';

    let galleryImage = [{
            src: 'lapangan futsal.JPG',
            title: 'Lapangan Futsal / Lapangan Utama'
        },
        {
            src: 'DSC_0354.JPG',
            title: 'Kelas XII IPA 2'
        },
        {
            src: 'DSC_0357.JPG',
            title: 'Kelas XII PAI'
        },
        {
            src: 'DSC_0293.JPG',
            title: 'Lorong Kelas X IPS'
        },
        {
            src: 'DSC_0262.JPG',
            title: 'Ruang Guru'
        },
        {
            src: 'DSC_0253.JPG',
            title: 'Ruang Tata Usaha'
        },
        {
            src: 'DSC_0298.JPG',
            title: 'Lorong Kelas X IPS'
        },
        {
            src: 'DSC_0300.JPG',
            title: 'Kelas XI IPA 2'
        },
        {
            src: 'DSC_0280.JPG',
            title: 'Lorong UKS - Kantin'
        },
        {
            src: 'DSC_0281.JPG',
            title: 'Kelas X IPS 1'
        },
        {
            src: 'DSC_0266.JPG',
            title: 'Lorong Ruang Guru'
        },
        {
            src: 'DSC_0322.JPG',
            title: 'Kelas X IPA 3'
        },
        {
            src: 'DSC_0313.JPG',
            title: 'Depan Kelas XI IPS 1'
        },
        {
            src: 'DSC_0278.JPG',
            title: 'Lorong Kelas X IPA'
        },
        {
            src: 'DSC_0284.JPG',
            title: 'Kelas X IPS 2'
        },
        {
            src: 'DSC_0258.JPG',
            title: 'Ruang Guru'
        },
        {
            src: 'DSC_0307.jpeg',
            title: 'Kelas XI IPA 3'
        },
        {
            src: 'DSC_0268.JPG',
            title: 'Kelas X IPA 1'
        },
        {
            src: 'DSC_0272.JPG',
            title: 'Kelas X IPA 2'
        },
        {
            src: 'DSC_0287.JPG',
            title: 'Kelas X IPS 3'
        },
        {
            src: 'DSC_0309.JPG',
            title: 'Kelas XI IPS 1'
        },
        {
            src: 'DSC_0315.JPG',
            title: 'Lorong XI IPA'
        },
        {
            src: 'DSC_0319.jpeg',
            title: 'Lorong XI IPA'
        },
        {
            src: 'DSC_0324.JPG',
            title: 'Kelas X IPA 4'
        },
        {
            src: 'DSC_0327.JPG',
            title: 'Pemandangan di Depan Kelas X IPA 4'
        },
        {
            src: 'DSC_0332.JPG',
            title: 'Lapangan Voli'
        },
        {
            src: 'DSC_0334.JPG',
            title: 'Kelas XI IPS 2'
        },
        {
            src: 'DSC_0337.JPG',
            title: 'Lorong Kelas XI IPS'
        },
        {
            src: 'DSC_0338.JPG',
            title: 'Kelas XI IPS 3'
        },
        {
            src: 'DSC_0340.JPG',
            title: 'Kelas XII IPA 4'
        },
        {
            src: 'DSC_0341.JPG',
            title: 'Kelas XII IPA 3'
        },
        {
            src: 'DSC_0343.JPG',
            title: 'Lapangan Futsal dan Bangunan Utama'
        },
        {
            src: 'DSC_0359.JPG',
            title: 'Kelas XII IPA 1'
        },
        {
            src: 'DSC_0361.JPG',
            title: 'Kelas XII IPS 3'
        },
        {
            src: 'DSC_0363.JPG',
            title: 'Kelas XII IPS 2'
        },
        {
            src: 'DSC_0381.JPG',
            title: 'Kelas XI PAI'
        },
        {
            src: 'DSC_0385.JPG',
            title: 'Kantin'
        },
        {
            src: 'DSC_0386.JPG',
            title: 'MAN 2 / Ruang Tata Boga'
        },
        {
            src: 'DSC_0392.JPG',
            title: 'Mushola'
        },
        {
            src: 'DSC_0397.JPG',
            title: 'Aula'
        },
        {
            src: 'DSC_0402.JPG',
            title: 'Dalam Mushola'
        },
        {
            src: 'DSC_0406.JPG',
            title: 'Tempat Wudhu Mushola'
        },
        {
            src: 'DSC_0412.JPG',
            title: 'Parkiran'
        },
        {
            src: 'DSC_0427.JPG',
            title: 'Perpustakaan'
        },
        {
            src: 'DSC_0428.JPG',
            title: 'Perpustakaan'
        },
        {
            src: 'DSC_0447.JPG',
            title: 'Kelas XI IPA 4'
        },
        {
            src: 'DSC_0451.JPG',
            title: 'Kelas XI IPA 1'
        },
    ];

    galleryImage.sort(function (a, b) {
        return a.src.localeCompare(b.src);
    })

    galleryImage.forEach(image => {
        setTimeout(() => {
            html += `
            <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-3 gallery-card">
                <div class="card">
                    <img src="img/homepage/gallery/${image.src}" class="img-thumbnail rounded" alt="${image.title}"
                    data-bs-toggle="modal" data-bs-target="#galleryModal"
                    data-title="${image.title}">
                </div>
            </div>
            `;
            gallery.innerHTML = html;
        }, 500);
    });
}

const getTTL = () => {
    fetch('../data/siswa.json')
        .then(response => response.json())
        .then(json => {
            let students = json;
            let html = '';
            let studentNowBirthday = [];
            let studentBirthdayThisMonth = [];
            const cardUltah = document.querySelector('#ulang-tahun');

            students.forEach(student => {
                let ttl = student.ttl.split('-');
                student.ttl = `${ttl[2]}-${ttl[1]}-${ttl[0]}`;
                let timeStudent = new Date(Date.parse(student.ttl));
                let timeNow = new Date(Date.now());

                let studentDate = timeStudent.getDate();
                let studentMonth = timeStudent.getMonth();
                let dateNow = timeNow.getDate();
                let monthNow = timeNow.getMonth();


                if (studentDate == dateNow && studentMonth == monthNow) {
                    studentNowBirthday.push(student);
                } else if (studentMonth == monthNow && studentDate - dateNow > 0) {
                    studentBirthdayThisMonth.push({
                        nama: student.nama,
                        kelas: student.kelas,
                        ttl: studentDate
                    });
                }
            });

            studentBirthdayThisMonth.sort((a, b) => a.ttl - b.ttl).forEach(student => {
                html += `<li class="list-group-item list-group-item-action"><b>${student.nama}</b> kelas <b>${student.kelas}</b> akan berulang tahun pada tanggal <b>${student.ttl}</b> nanti!</li>`
            });

            if (studentNowBirthday.length == 1) {
                let student = studentNowBirthday[0];
                Swal.fire({
                    title: "Ada yang Sedang Berulang Tahun!",
                    html: `Hari ini <b>${student.nama}</b> kelas <b>${student.kelas}</b> sedang berulang tahun!`,
                    icon: "info"
                });
            } else if (studentNowBirthday.length == 2) {
                let text = '';
                studentNowBirthday.forEach((student, index) => {
                    if (index == 1) {
                        text += ` dan <b>${student.nama}</b> kelas <b>${student.kelas}</b>`
                    } else {
                        text += `<b>${student.nama}</b> kelas <b>${student.kelas}</b>`
                    }
                });
                Swal.fire({
                    title: "Ada yang Sedang Berulang Tahun!",
                    html: `Hari ini ${text} sedang berulang tahun!`,
                    icon: "info"
                });
            } else if (studentNowBirthday.length > 2) {
                let text = '';
                studentNowBirthday.forEach((student, index) => {
                    if (index == studentNowBirthday.length - 1) {
                        text += `dan <b>${student.nama}</b> kelas <b>${student.kelas}</b>`
                    } else {
                        text += `<b>${student.nama}</b> kelas <b>${student.kelas}</b>, `
                    }
                });
                Swal.fire({
                    title: "Ada yang Sedang Berulang Tahun!",
                    html: `Hari ini ${text} sedang berulang tahun!`,
                    icon: "info"
                });
            }

            cardUltah.innerHTML = html;
        });
}

const load = () => {
    windowResize();
    scroll();
    gallery();
    galleryModal();
    getTTL();
}

document.body.onload = load;