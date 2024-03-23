"use strict";
let usersDB = [
  {
    id: 1,
    username: "khizar iqbal",
    isActive: true,
  },
  {
    id: 2,
    username: "muhammad kamran",
    isActive: false,
  },
  {
    id: 3,
    username: "hassan bhai",
    isActive: false,
  },
  {
    id: 4,
    username: "uzair bhai",
    isActive: false,
  },
  {
    id: 5,
    username: "bilal shah g",
    isActive: false,
  },
  {
    id: 6,
    username: "kamran",
    isActive: true,
  },
  {
    id: 7,
    username: "Muavia",
    isActive: true,
  },
  {
    id: 8,
    username: "Gul",
    isActive: true,
  },
  {
    id: 9,
    username: "Ahsan",
    isActive: false,
  },
  {
    id: 10,
    username: "khan g",
    isActive: true,
  },
];
const renderUserCard = ({ id, username, isActive }) => {
  const statusText = isActive ? "Active" : "Inactive";
  const statusClass = isActive ? "active" : "inactive";
  const btnText = isActive ? "Deactivate the user!" : "Activate the user!";
  const btnClass = isActive ? "active-btn" : "inactive-btn";
  return `
    <div class="users_card flex">
      <h2 class="users_card1">${username}</h2>
      <h3 class="users_cards1 ${statusClass}">${statusText}</h3>
      <button class="users_card_btn ${btnClass}" data-id =${id}>
        ${btnText}
      </button>
    </div>
  `;
};
const renderUsers = (Userdb) => Userdb.map(renderUserCard).join(" ");
const renderAllHTML = (usersDB) => {
  const activeUser = usersDB.filter(({ isActive }) => isActive);
  const inactiveUser = usersDB.filter(({ isActive }) => !isActive);
  const activeHiddenClass = activeUser.length == 0 ? "hidden" : "";
  const inactiveHiddenClass = inactiveUser.length == 0 ? "hidden" : "";
  return `
  <div class="users_active ${activeHiddenClass}">
     <h1 class="secondary-heading">Active Users</h1>
     <div class="users_cards active_cards flex">${renderUsers(activeUser)}</div>
  </div>
  <div class="users_inactive ${inactiveHiddenClass}">
    <h1 class="secondary-heading">Inactive Users</h1>
    <div class="users_cards inactive_cards flex">${renderUsers(
      inactiveUser
    )}</div>
  </div>
  `;
};
const getRenderHTML = (Userdb) =>
  (document.querySelector(".users").innerHTML = renderAllHTML(Userdb));
getRenderHTML(usersDB);
const btnHandler = () => {
  const allBtn = document.querySelectorAll(".users_card_btn");
  allBtn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const btnClicked = e.target;
      const btnId = btnClicked.dataset.id;
      const user = usersDB.find((u) => u.id == btnId);
      user.isActive = !user.isActive;
      getRenderHTML(usersDB);
      btnHandler();
    });
  });
};
btnHandler();
