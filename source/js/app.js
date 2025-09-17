// Employee data
const employees = {
  1: {
    id: 1,
    name: "Ahmad Fauzi",
    position: "Manajer Operasional",
    department: "Operasional • Jakarta Pusat",
    status: "Status: Aktif",
    performance: 92,
    kpi: 88,
    attendance: 98,
    training: 5,
    certifications: 3,
    disciplinary: 0,
    recommendation: "Sangat Direkomendasikan untuk Promosi",
    leadership: 95,
    technical: 87,
    behavioral: 92,
    lastUpdated: "2024-11-15",
    avatar: "https://placehold.co/100x100/3b82f6/ffffff?text=AF",
  },
  2: {
    id: 2,
    name: "Siti Rahayu",
    position: "Supervisor HRD",
    department: "SDM • Bandung",
    status: "Status: Aktif",
    performance: 85,
    kpi: 82,
    attendance: 95,
    training: 4,
    certifications: 2,
    disciplinary: 1,
    recommendation: "Direkomendasikan untuk Rotasi Internal",
    leadership: 78,
    technical: 85,
    behavioral: 88,
    lastUpdated: "2024-11-14",
    avatar: "https://placehold.co/100x100/10b981/ffffff?text=SR",
  },
  3: {
    id: 3,
    name: "Budi Santoso",
    position: "Analis Keuangan",
    department: "Keuangan • Surabaya",
    status: "Status: Perlu Perhatian",
    performance: 78,
    kpi: 75,
    attendance: 90,
    training: 3,
    certifications: 1,
    disciplinary: 2,
    recommendation: "Perlu Pengembangan Kompetensi",
    leadership: 65,
    technical: 80,
    behavioral: 72,
    lastUpdated: "2024-11-13",
    avatar: "https://placehold.co/100x100/f59e0b/ffffff?text=BS",
  },
};

// Tab management
function changeTab(tabId) {
  // Hide all content sections
  document.getElementById("dashboard-content").classList.add("hidden");
  document.getElementById("employees-content").classList.add("hidden");
  document.getElementById("analytics-content").classList.add("hidden");
  document.getElementById("recommendations-content").classList.add("hidden");
  document.getElementById("reports-content").classList.add("hidden");

  // Show selected content section
  document.getElementById(tabId + "-content").classList.remove("hidden");

  // Update page title
  let pageTitle = "";
  switch (tabId) {
    case "dashboard":
      pageTitle = "Human Capital Intelligence Dashboard";
      break;
    case "employees":
      pageTitle = "Employee Management";
      break;
    case "analytics":
      pageTitle = "Advanced Analytics";
      break;
    case "recommendations":
      pageTitle = "Strategic Recommendations";
      break;
    case "reports":
      pageTitle = "Reporting & Compliance";
      break;
  }
  document.getElementById("page-title").textContent = pageTitle;

  // Update active state in sidebar
  const buttons = document.querySelectorAll("nav button");
  buttons.forEach((button) => {
    button.classList.remove(
      "bg-gradient-to-r",
      "from-blue-600",
      "to-indigo-600",
      "text-white",
      "shadow-md"
    );
    button.classList.add(
      "text-gray-600",
      "hover:bg-gray-100",
      "hover:text-gray-900"
    );
  });

  // Find and activate the clicked button
  const activeButton = Array.from(buttons).find((btn) =>
    btn.getAttribute("onclick").includes(tabId)
  );
  if (activeButton) {
    activeButton.classList.remove(
      "text-gray-600",
      "hover:bg-gray-100",
      "hover:text-gray-900"
    );
    activeButton.classList.add(
      "bg-gradient-to-r",
      "from-blue-600",
      "to-indigo-600",
      "text-white",
      "shadow-md"
    );
  }
}

// Sidebar toggle
function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  const mainContent = document.getElementById("main-content");
  const toggleIcon = document.getElementById("sidebar-toggle-icon");
  const toggleText = document.getElementById("sidebar-toggle-text");

  if (sidebar.classList.contains("w-64")) {
    sidebar.classList.remove("w-64");
    sidebar.classList.add("w-20");
    mainContent.classList.remove("ml-64");
    mainContent.classList.add("ml-20");
    toggleIcon.classList.add("rotate-180");
    toggleText.textContent = "Expand Menu";
  } else {
    sidebar.classList.remove("w-20");
    sidebar.classList.add("w-64");
    mainContent.classList.remove("ml-20");
    mainContent.classList.add("ml-64");
    toggleIcon.classList.remove("rotate-180");
    toggleText.textContent = "Collapse Menu";
  }
}

// Employee modal
function showEmployeeModal(employeeId) {
  const employee = employees[employeeId];
  if (!employee) return;

  // Populate modal with employee data
  document.getElementById("modal-avatar").src = employee.avatar;
  document.getElementById("modal-name").textContent = employee.name;
  document.getElementById("modal-position").textContent = employee.position;
  document.getElementById("modal-department").textContent = employee.department;
  document.getElementById("modal-status").textContent = employee.status;
  document.getElementById("modal-status").className = employee.status.includes(
    "Perlu"
  )
    ? "ml-4 inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800"
    : "ml-4 inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800";
  document.getElementById("modal-performance").textContent =
    employee.performance + "%";
  document.getElementById("performance-bar").style.width =
    employee.performance + "%";
  document.getElementById("modal-kpi").textContent = employee.kpi + "%";
  document.getElementById("kpi-bar").style.width = employee.kpi + "%";
  document.getElementById("modal-attendance").textContent =
    employee.attendance + "%";
  document.getElementById("attendance-bar").style.width =
    employee.attendance + "%";
  document.getElementById("modal-leadership").textContent =
    employee.leadership + "%";
  document.getElementById("leadership-bar").style.width =
    employee.leadership + "%";
  document.getElementById("modal-technical").textContent =
    employee.technical + "%";
  document.getElementById("technical-bar").style.width =
    employee.technical + "%";
  document.getElementById("modal-behavioral").textContent =
    employee.behavioral + "%";
  document.getElementById("behavioral-bar").style.width =
    employee.behavioral + "%";
  document.getElementById("modal-training").textContent = employee.training;
  document.getElementById("modal-certifications").textContent =
    employee.certifications;
  document.getElementById("modal-disciplinary").textContent =
    employee.disciplinary;
  document.getElementById("modal-recommendation").textContent =
    employee.recommendation;
  document.getElementById("modal-last-updated").textContent =
    employee.lastUpdated;

  // Show modal
  document.getElementById("employee-modal").classList.add("show");
  document.body.style.overflow = "hidden";
}

// Close modal function
function closeEmployeeModal() {
  document.getElementById("employee-modal").classList.remove("show");
  document.body.style.overflow = "auto";
}

// Apply filters
function applyFilters() {
  const department = document.getElementById("filter-department").value;
  const branch = document.getElementById("filter-branch").value;
  const performance = document.getElementById("filter-performance").value;
  const kpi = document.getElementById("filter-kpi").value;

  // In a real application, you would filter the data here
  alert(
    "Filters applied: " +
      (department ? "Department: " + department + ", " : "") +
      (branch ? "Branch: " + branch + ", " : "") +
      (performance ? "Min Performance: " + performance + "%, " : "") +
      (kpi ? "Min KPI: " + kpi + "%" : "")
  );
}

// Initialize with dashboard tab active and set up event listeners
document.addEventListener("DOMContentLoaded", function () {
  changeTab("dashboard");

  // Set up close button event listeners
  const closeModalBtn = document.getElementById("close-modal-btn");
  const closeModalBottomBtn = document.getElementById("close-modal-bottom-btn");
  const modal = document.getElementById("employee-modal");

  if (closeModalBtn) {
    closeModalBtn.addEventListener("click", function () {
      document.getElementById("employee-modal").classList.remove("show");
      document.body.style.overflow = "auto";
    });
  }

  if (closeModalBottomBtn) {
    closeModalBottomBtn.addEventListener("click", function () {
      document.getElementById("employee-modal").classList.remove("show");
      document.body.style.overflow = "auto";
    });
  }

  if (modal) {
    modal.addEventListener("click", function (e) {
      if (e.target === this) {
        document.getElementById("employee-modal").classList.remove("show");
        document.body.style.overflow = "auto";
      }
    });
  }
});
