import Swal from 'sweetalert2';

export const showAlert = ({ icon = 'success', title = 'Success', text = '', confirmButtonColor = 'bg-primary-05' }) => {
  return Swal.fire({
    icon,
    title,
    text,
    customClass: {
      confirmButton: `${confirmButtonColor} hover:bg-green-800 text-white font-bold py-2 px-4 rounded`,
    },
    buttonsStyling: false,
  });
};