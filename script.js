


document.addEventListener("DOMContentLoaded", () => {


  
  let balance = 12500;    
  let balanceHidden = false; 


  const balanceAmountEl = document.getElementById("balanceAmount");
  const addMoneyBtn = document.getElementById("addMoneyBtn");
  const sendMoneyBtn = document.getElementById("sendMoneyBtn");
  const eyeIcon = document.getElementById("eyeIcon");
  const sidebarNav = document.getElementById("sidebarNav");
  const bellIcon = document.getElementById("bellIcon");
  const bellDot = document.getElementById("bellDot");
  const quickActionsGrid = document.getElementById("quickActionsGrid");
  const rechargeGrid = document.getElementById("rechargeGrid");
  const exploreOffersBtn = document.getElementById("exploreOffersBtn");
  const searchInput = document.getElementById("searchInput");
  const toast = document.getElementById("toast");

  // ------------------------------------------------------------
  
  // ------------------------------------------------------------

  function renderBalance() {
    if (balanceHidden) {
      balanceAmountEl.textContent = "₹ ••••••";
    } else {
      balanceAmountEl.textContent = "₹ " + balance.toLocaleString("en-IN");
    }
  }


  let toastTimer = null;
  function showToast(message) {
    toast.textContent = message;
    toast.classList.add("show");

   
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.remove("show");
    }, 2000);
  }


  addMoneyBtn.addEventListener("click", () => {
    balance += 500;          
    renderBalance();          
                              
    showToast("₹500 added to your balance");
  });

  sendMoneyBtn.addEventListener("click", () => {
    if (balance < 500) {
      showToast("Insufficient balance");
      return;
    }
    balance -= 500;
    renderBalance();
    showToast("₹500 sent successfully");
  });

 
  eyeIcon.addEventListener("click", () => {
    balanceHidden = !balanceHidden;
    eyeIcon.textContent = balanceHidden ? "🙈" : "👁️";
    renderBalance();
  });


  sidebarNav.addEventListener("click", (e) => {
    const link = e.target.closest(".sidebar-link");
    if (!link) return; 

    e.preventDefault(); 

   
    document.querySelectorAll(".sidebar-link").forEach((el) =>
      el.classList.remove("active")
    );
  
    link.classList.add("active");

    showToast(link.dataset.page + " page (demo)");
  });


  function handleActionClick(e) {
    const btn = e.target.closest(".action-item");
    if (!btn) return;
    showToast(btn.dataset.action + " clicked (demo)");
  }

  quickActionsGrid.addEventListener("click", handleActionClick);
  rechargeGrid.addEventListener("click", handleActionClick);


  bellIcon.addEventListener("click", () => {
    if (bellDot.style.display !== "none") {
      bellDot.style.display = "none";
      showToast("No new notifications");
    } else {
      showToast("You're all caught up");
    }
  });


  exploreOffersBtn.addEventListener("click", () => {
    showToast("Opening offers... (demo)");
  });


  searchInput.addEventListener("input", (e) => {
    const value = e.target.value.trim();
    if (value.length > 0) {
      console.log("Searching for:", value);
    }
  });

  renderBalance();
});