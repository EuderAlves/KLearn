import Swal, { SweetAlertResult } from 'sweetalert2';

export class SwalUtils {

  showSuccessMessage(title: string): Promise<SweetAlertResult> {
    return Swal.fire({
      position: 'center',
      icon: 'success',
      title,
      showConfirmButton: false,
      timer: 2000,
    });
  }

  showGenericWaring(msg: string): Promise<SweetAlertResult> {
    return Swal.fire({
      position: 'center',
      icon: 'warning',
      title: 'Atenção!',
      text: msg,
      showConfirmButton: true,
    });
  }

  showConfirm(
    title: string,
    confirmButtonText = 'Sim',
    cancelButtonText = 'Não'
  ): Promise<SweetAlertResult> {
    return Swal.fire({
      position: 'center',
      icon: 'question',
      title,
      showCancelButton: true,
      cancelButtonText,
      confirmButtonText,
    });
  }

}
