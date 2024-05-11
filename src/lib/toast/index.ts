import Swal from "sweetalert2";

const Toast = Swal.mixin({
    toast: true,
    position: "bottom-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
    },
    showCloseButton: true,
});

async function fireToast(
    type: 'success' | 'error' | 'warning' | 'info' | 'question',
    message: string,
) {
    await Toast.fire({
        icon: type,
        title: message,
        target: 'body',
    });
}

export default fireToast;