function simulateUpload() {
  const button = document.getElementById("uploadBtn");
  const message = document.getElementById("message");


  message.textContent = "";

  
  button.disabled = true;
  button.textContent = "Uploading...";

  
  setTimeout(() => {

    onUploadSuccess("✅ Upload successful!");


    button.disabled = false;
    button.textContent = "Upload File";
  }, 2000);
}


function onUploadSuccess(msg) {
  const message = document.getElementById("message");
  message.textContent = msg;
}
