const user_List = document.querySelector(".user-list");

// GET Api
const getUsers = async () => {
  await fetch("http://localhost:5000/users")
    .then((res) => res.json())
    .then((res) => {
      console.log(res.length);
      let content = "";

      res.map((item, index) => {
        content += `    

                        <div class="card border-0 rounded">               
                            <div class="card-body w-100 bg-white p-3 shadow rounded-1 mb-3 card-scrollable">
                               
                                <div class="d-flex justify-content-between align-items-center pb-3">
                                    <div class="d-flex align-items-center gap-1"> 
                                    <img style="width: 40px; height: 40px; border-radius: 50%; cursor: pointer; object-fit: cover; border: 5px solid lightcyan;" src="${item.client_img}" alt="">
                                        <h6 class="card-title"> ${item.client_name}</h6>
                                    </div>
                
                                    <div class="d-flex align-items-center gap-1"> 
                                        <img style="width: 40px; height: 40px; border-radius: 50%; cursor: pointer; object-fit: cover; border: 5px solid lightcyan;" src="${item.user_img}" alt="">
                                        <h6 class="card-title"> ${item.user_name} </h6>
                                    </div>
                                </div>

                                <div class="d-flex justify-content-between align-items-center">
                                    <img style="width: 40px; height: 40px; border-radius: 50%; cursor: pointer; object-fit: cover; border: 5px solid lightcyan;" src="${item.user_img}" alt="">
                                    <button
                                        class=""
                                        style=" height: 40px; width: 90%; border: 1px solid #F2F4F7;
                                        text-align-last: left; cursor: pointer; background-color: #f0f2f5; border-radius: 50px;
                                        padding: 0px 20px;font-family: inherit; font-size: 18px; color: #65676b;"
                                        data-bs-toggle="modal" data-bs-target="#exampleModal2" id="create-post-btn2">Whats on your mind ?</button>
                                </div>
                            
                                <div style="height: 2px; background-color: #e4e6eb; margin: 10px 0px;"></div>

                                <div class="create-post-footer">
                                    <ul class="d-flex list-unstyled">
                                        <li class="d-flex justify-content-center align-items-center text-center" 
                                            style=" width: 32%; gap: 5px; font-size: 14px; cursor: pointer; height: 40px; border-radius: 6px;;">
                                            <img style="width: 40px; height: 40px; border-radius: 50%; cursor: pointer; object-fit: cover; border: 5px solid lightcyan;" src="${item.user_img}" alt="">
                                            <img style="width: 40px; height: 40px; border-radius: 50%; cursor: pointer; object-fit: cover; border: 5px solid lightcyan;" src="${item.client_img}" alt="">
                                        </li>
                                        <li class="d-flex justify-content-center align-items-center"
                                            style="width: 32%; gap: 5px; font-size: 14px; cursor: pointer;">
                                            <span class="bg-light text-black d-flex align-items-center justify-content-center rounded-circle fw-bold" style="width: 40px; height: 40px;"> ${item.like} </span>
                                        </li>
                                        <li class=" d-flex justify-content-center align-items-center text-center" 
                                            style="width: 32%; gap: 5px; font-size: 14px; cursor: pointer; height: 40px; border-radius: 6px;">
                                            <i class="fa-regular fa-comments"></i>
                                            <span>  ${item.comment} </span>
                                        </li>
                                        <li class=" d-flex justify-content-center align-items-center text-center" 
                                            style="width: 32%; gap: 5px; font-size: 14px; cursor: pointer; height: 40px; border-radius: 6px;">
                                            <i class="fa-solid fa-paperclip" data-bs-toggle="modal" data-bs-target="#exampleModal" id="create-post-btn"></i>
                                            <span>
                                            
                                            ${res.length}
                                             </span>
                                        </li>
                                        <li class=" d-flex justify-content-center align-items-center text-center" 
                                            style="width: 50%; gap: 5px; font-size: 14px; cursor: pointer; height: 40px; border-radius: 6px;">
                                            <i class="fa-regular fa-calendar-days"></i>
                                            <span> 30-12-2022 </span>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </div>     
            `;
      });
      user_List.innerHTML = content;
    })
    .catch((error) => {
      console.log(error);
    });
};
getUsers();









const postForm = document.getElementById("post-form");

postForm.onsubmit = (e) => {
  e.preventDefault();
  const form_data = new FormData(e.target);
  const user = Object.fromEntries(form_data.entries());
  console.log(user);

  fetch("http://localhost:5000/users", {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(user)
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
  e.target.reset();
};
