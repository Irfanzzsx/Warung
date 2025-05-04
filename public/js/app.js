function readyFn( jQuery ) {
    // Code to run when the document is ready.
}
 
$( document ).ready( readyFn );
// or:
$( window ).on( "load", readyFn );

const back = document.querySelector(".back");
function createForm(btn) {

    //db
    const verify = true;
    const pageForm = document.createElement("div");
    const body = document.querySelector("body");
    

    if (verify) {
        //dbClose
        const close = document.createElement("button")
        close.setAttribute("class","close");
        close.setAttribute("onclick","btn()");
        close.innerHTML = "X";
        pageForm.appendChild(close);

        //effect
        back.style.filter = "blur(5px)";
        

        const pageFormBody = document.createElement("div");
        pageFormBody.setAttribute("class","form-body");

        const pageFormContent = document.createElement("div");
        pageFormContent.setAttribute("class","form-content");

        const postForm = document.createElement("form");
        postForm.setAttribute("action", "/buy");
        postForm.setAttribute("method", "post");
        postForm.setAttribute("id","postForm");
        
        if(btn === 1 ) {
            const img = document.createElement("img");
            img.setAttribute("class", "img-pop");
            img.setAttribute("src","https://assets-pergikuliner.com/vZPqfx11-RDEi8LCkgtn8b8UUWQ=/fit-in/1366x768/smart/filters:no_upscale()/https://assets-pergikuliner.com/uploads/image/picture/626552/picture-1501037351.jpg");
            pageFormContent.appendChild(img);

            //text
            const text1 = "Nasi Goreng";
            const deskripsi = "Nasi Goreng khas kaki lima dengan isian lengkap sehat dan lezat!!";
            const btnText = "Beli";
            
            //elementCreate
            const createElementLabel1 = document.createElement("h3");
            const createElementParagraf1 = document.createElement("p");
            const input1 = document.createElement("input");
            const btnSubmit = document.createElement("button");
            const price = document.createElement("label");

            //inputValue
            input1.setAttribute("id","buy-value");
            input1.setAttribute("class","col-2 col-lg-1 ");
            input1.setAttribute("type","number");
            input1.setAttribute("min","1");
            input1.setAttribute("value","1");
            input1.setAttribute("name","inputForm");

            //btnSubmit
            btnSubmit.setAttribute("type","submit");
            btnSubmit.setAttribute("class","btn-submit col-sm-3 col-xl-5");
            btnSubmit.append(btnText);

            //push
            createElementLabel1.append(text1);
            createElementParagraf1.append(deskripsi);
            pageFormContent.append(createElementLabel1);
            pageFormContent.append(createElementParagraf1);
            pageFormContent.append(postForm);

            postForm.append(input1);
            postForm.append(btnSubmit);



            

        } else if (btn === 2 ) {
            const img = document.createElement("img");
            img.setAttribute("class", "img-pop");
            img.setAttribute("src","es.jpg");
            pageFormContent.appendChild(img);

            //text
            const text1 = "Es Cendol";
            const deskripsi = "Es cendol meler lumer bikin ingus gak berhenti melerrr";
            const btnText = "Beli";
            
            //elementCreate
            const createElementLabel1 = document.createElement("h3");
            const createElementParagraf1 = document.createElement("p");
            const input1 = document.createElement("input");
            const btnSubmit = document.createElement("button");
            const price = document.createElement("label");

            //inputValue
            input1.setAttribute("id","buy-value");
            input1.setAttribute("class","col-2 col-lg-1 ");
            input1.setAttribute("type","number");
            input1.setAttribute("min","1");
            input1.setAttribute("value","1");
            input1.setAttribute("name","inputForm");

            //btnSubmit
            btnSubmit.setAttribute("type","submit");
            btnSubmit.setAttribute("class","btn-submit col-sm-3 col-xl-5");
            btnSubmit.append(btnText);

            //push
            createElementLabel1.append(text1);
            createElementParagraf1.append(deskripsi);
            pageFormContent.append(createElementLabel1);
            pageFormContent.append(createElementParagraf1);
            pageFormContent.append(postForm);

            postForm.append(input1);
            postForm.append(btnSubmit);


        } else if (btn === 3 ) {
            const img = document.createElement("img");
            img.setAttribute("class", "img-pop");
            img.setAttribute("src","martabak.jpg");
            pageFormContent.appendChild(img);

            //text
            const text1 = "Martabak Lumer";
            const deskripsi = "Martabak spesial banjir topping bukan cuma yapping!!";
            const btnText = "Beli";
            
            //elementCreate
            const createElementLabel1 = document.createElement("h3");
            const createElementParagraf1 = document.createElement("p");
            const input1 = document.createElement("input");
            const btnSubmit = document.createElement("button");
            const price = document.createElement("label");

            //inputValue
            input1.setAttribute("id","buy-value");
            input1.setAttribute("class","col-2 col-lg-1 ");
            input1.setAttribute("type","number");
            input1.setAttribute("min","1");
            input1.setAttribute("value","1");
            input1.setAttribute("name","inputForm");

            //btnSubmit
            btnSubmit.setAttribute("type","submit");
            btnSubmit.setAttribute("class","btn-submit col-sm-3 col-xl-5");
            btnSubmit.append(btnText);

            //push
            createElementLabel1.append(text1);
            createElementParagraf1.append(deskripsi);
            pageFormContent.append(createElementLabel1);
            pageFormContent.append(createElementParagraf1);
            pageFormContent.append(postForm);

            postForm.append(input1);
            postForm.append(btnSubmit);


        } else if (btn === 4 ) {
            const img = document.createElement("img");
            img.setAttribute("class", "img-pop");
            img.setAttribute("src","seblak.jpg");
            pageFormContent.appendChild(img);

            //text
            const text1 = "Seblak Asam Lambung";
            const deskripsi = "Seblak pedas nikmat, dijamin mules sampe kiamat!";
            const btnText = "Beli";
            
            //elementCreate
            const createElementLabel1 = document.createElement("h3");
            const createElementParagraf1 = document.createElement("p");
            const input1 = document.createElement("input");
            const btnSubmit = document.createElement("button");
            const price = document.createElement("label");

            //inputValue
            input1.setAttribute("id","buy-value");
            input1.setAttribute("class","col-2 col-lg-1 ");
            input1.setAttribute("type","number");
            input1.setAttribute("min","1");
            input1.setAttribute("value","1");
            input1.setAttribute("name","inputForm");

            //btnSubmit
            btnSubmit.setAttribute("type","submit");
            btnSubmit.setAttribute("class","btn-submit col-sm-3 col-xl-5");
            btnSubmit.append(btnText);

            //push
            createElementLabel1.append(text1);
            createElementParagraf1.append(deskripsi);
            pageFormContent.append(createElementLabel1);
            pageFormContent.append(createElementParagraf1);
            pageFormContent.append(postForm);

            postForm.append(input1);
            postForm.append(btnSubmit);


        }
        
        pageFormBody.appendChild(pageFormContent);
        pageForm.appendChild(pageFormBody);
    }
    

    

    //append
    pageForm.setAttribute("id","form");
    body.appendChild(pageForm);
    

    //log
    console.log("create");

}

$(".btn1").on("click", () => {
    createForm(1);
});

$(".btn2").on("click", () => {
    createForm(2);
});

$(".btn3").on("click", () => {
    createForm(3);
});

$(".btn4").on("click", () => {
    createForm(4);
});

//closebtn
function btn() {
    $("#form").remove();
    back.style.filter = "blur(0)";
    

}
