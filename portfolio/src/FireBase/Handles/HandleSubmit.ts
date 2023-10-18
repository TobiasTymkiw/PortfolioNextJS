import { addDoc, collection } from "@firebase/firestore";
import { firestore } from "../fireBaseSetup";
import Swal from "sweetalert2";

interface infoform {
  firstName: string,
  email: string,
  message: string
}

const handleSubmitFireBase = (infoform: infoform) => {
  const ref = collection(firestore, "messagesFromPortfolio"); // Firebase creates this automatically
  let data = {
    Name: infoform.firstName,
    Email: infoform.email,
    Message: infoform.message,
  };
  try {
    addDoc(ref, data).then((ref) => {
      Swal.fire({
        icon: "success",
        title: "Good job!",
        text: "The message has been sent successfully!",
        background: "#131111",
        timer: 1800,
        confirmButtonColor: "rgb(65, 24, 24)",
        allowOutsideClick: false,
        showConfirmButton: false,
      })
    }, (ref) => {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: ref//'Something went wrong!
        ,
        background: "#131111",
       //timer: 1800,
        confirmButtonColor: "rgb(65, 24, 24)",
        allowOutsideClick: false,
        //showConfirmButton: false,
      })
    })
  } catch (err) {
    console.log(err)
  }
};
export default handleSubmitFireBase;
