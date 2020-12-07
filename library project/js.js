class library {
  constructor(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;
  }
  add(lib) {
    let tableBody = document.getElementById("tableBody");
    console.log("adding to ui");
    let html = `<tr>
                            <td>${lib.name}</td>
                            <td>${lib.author}</td>
                            <td>${lib.type}</td>
                             
                            </tr>`;
    tableBody.innerHTML += html;
  }
  clear() {
    let clear = document.getElementById("libraryForm");
    clear.reset();
  }
  validate(lib) {
    if (lib.name.length < 2 || lib.author.length < 2) {
      return false;
    } else {
      return true;
    }
  }
  display(alert, msg) {
    let message = document.getElementById("message");
    let boldTxt;
    if (alert === "success") {
      boldTxt = "success";
    } else {
      boldTxt = "error!";
    }
    let htmlc = `<div class="alert alert-${alert} alert-dismissible fade show" role="alert">
                                <strong>${boldTxt}:</strong> ${msg}
                                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">×</span>
                                </button>
                            </div>`;
    message.innerHTML = htmlc;
    setTimeout(function () {
      message.innerHTML = " ";
    }, 5000);
  }
}

let libraryForm = document.getElementById("libraryForm");
libraryForm.addEventListener("submit", libraryFormSubmit);
function libraryFormSubmit(e) {
  console.log("you have clicked the sumbit button");
  let name = document.getElementById("bookName").value;
  let author = document.getElementById("author").value;
  let fiction = document.getElementById("fiction");
  let programming = document.getElementById("programming");
  let cooking = document.getElementById("cooking");
  let type;
  if (fiction.checked) {
    type = fiction.value;
  } else if (programming.checked) {
    type = programming.value;
  } else {
    type = cooking.value;
  }
  // console.log(name,author,type);
  let lib = new library(name, author, type);
  console.log(lib);
  if (lib.validate(lib)) {
    lib.add(lib);
    lib.clear();
    lib.display("success", "Your book has been successfully added");
  } else {
    lib.display("danger", "Sorry you cannot add this book");
  }
  e.preventDefault();
}
