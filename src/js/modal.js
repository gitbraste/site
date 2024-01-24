const switchModal = (modalSelector) => {
    const modal = document.querySelector(modalSelector);
    const actualStyle = modal.style.display;

    modal.style.display = (actualStyle === 'block') ? 'none' : 'block';
};

document.querySelector('.modalDefullBtn').addEventListener('click', () => switchModal('.modalDefull'));
document.querySelector('.modalSectilBtn').addEventListener('click', () => switchModal('.modalSectil'));

document.querySelector('.modalDefullBtnClose').addEventListener('click', () => switchModal('.modalDefull'));
document.querySelector('.modalSectilBtnClose').addEventListener('click', () => switchModal('.modalSectil'));

window.onclick = function(event) {
    const modalDefull = document.querySelector('.modalDefull');
    const modalSectil = document.querySelector('.modalSectil');

    if (event.target === modalDefull) {
        switchModal('.modalDefull');
    }

    if (event.target === modalSectil) {
        switchModal('.modalSectil');
    }
};
