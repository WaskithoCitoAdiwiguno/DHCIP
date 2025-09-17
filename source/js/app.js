// Mock employee data
let employees = [
  {
    id: 1,
    name: "Ahmad Fauzi",
    employeeId: "DAM-001",
    department: "Operations",
    position: "Senior Manager",
    attendance: { rate: 98, late: 2, absent: 1 },
    kpi: { score: 92, trend: "up", lastQuarter: 88 },
    supervisorEvaluation: {
      score: 4.5,
      comments: "Excellent leadership skills",
    },
    training: {
      completed: 8,
      inProgress: 2,
      certifications: ["Advanced Management", "Safety Compliance"],
    },
    behavioralCompetencies: {
      score: 4.7,
      categories: ["Leadership", "Communication", "Teamwork"],
    },
    technicalCompetencies: {
      score: 4.3,
      categories: ["Logistics", "Fleet Management", "Budgeting"],
    },
    bonusEligibility: true,
    promotionEligibility: true,
    salaryScale: "Grade 7",
    cases: [
      {
        type: "Achievement",
        description: "Outstanding performance in Q3 2023",
        date: "2023-09-15",
      },
      {
        type: "Warning",
        description: "Late submission of reports",
        date: "2023-02-10",
        severity: "Minor",
      },
    ],
    branchPerformance: { score: 89, rank: 3, targetAchievement: 105 },
    recommendations: [
      "Suitable for regional director position",
      "Recommended for advanced leadership training",
      "High potential for executive track",
    ],
    suitability: {
      trainingField: "Leadership Development",
      confidence: 95,
      dataSufficiency: "High",
    },
  },
  {
    id: 2,
    name: "Siti Rahayu",
    employeeId: "DAM-002",
    department: "HR",
    position: "HR Specialist",
    attendance: { rate: 95, late: 5, absent: 3 },
    kpi: { score: 87, trend: "stable", lastQuarter: 86 },
    supervisorEvaluation: { score: 4.2, comments: "Good interpersonal skills" },
    training: {
      completed: 6,
      inProgress: 1,
      certifications: ["HR Compliance", "Talent Management"],
    },
    behavioralCompetencies: {
      score: 4.5,
      categories: ["Communication", "Problem Solving", "Adaptability"],
    },
    technicalCompetencies: {
      score: 4.0,
      categories: ["Recruitment", "Employee Relations", "Compensation"],
    },
    bonusEligibility: true,
    promotionEligibility: false,
    salaryScale: "Grade 5",
    cases: [
      {
        type: "Achievement",
        description: "Implemented new onboarding process",
        date: "2023-06-20",
      },
    ],
    branchPerformance: { score: 85, rank: 7, targetAchievement: 98 },
    recommendations: [
      "Suitable for HR Manager position with additional training",
      "Recommended for conflict resolution training",
      "Potential for department leadership",
    ],
    suitability: {
      trainingField: "Conflict Resolution",
      confidence: 88,
      dataSufficiency: "Medium",
    },
  },
  {
    id: 3,
    name: "Budi Santoso",
    employeeId: "DAM-003",
    department: "Maintenance",
    position: "Technician",
    attendance: { rate: 89, late: 8, absent: 7 },
    kpi: { score: 78, trend: "down", lastQuarter: 82 },
    supervisorEvaluation: {
      score: 3.8,
      comments: "Needs improvement in timeliness",
    },
    training: {
      completed: 4,
      inProgress: 0,
      certifications: ["Basic Maintenance"],
    },
    behavioralCompetencies: {
      score: 3.9,
      categories: ["Teamwork", "Reliability", "Initiative"],
    },
    technicalCompetencies: {
      score: 4.1,
      categories: [
        "Vehicle Repair",
        "Preventive Maintenance",
        "Parts Management",
      ],
    },
    bonusEligibility: false,
    promotionEligibility: false,
    salaryScale: "Grade 3",
    cases: [
      {
        type: "Warning",
        description: "Repeated tardiness",
        date: "2023-01-15",
        severity: "Major",
      },
      {
        type: "Warning",
        description: "Safety violation",
        date: "2023-04-22",
        severity: "Major",
      },
    ],
    branchPerformance: { score: 76, rank: 15, targetAchievement: 85 },
    recommendations: [
      "Requires performance improvement plan",
      "Recommended for time management training",
      "Not suitable for promotion at this time",
    ],
    suitability: {
      trainingField: "Time Management",
      confidence: 75,
      dataSufficiency: "Medium",
    },
  },
  {
    id: 4,
    name: "Dewi Lestari",
    employeeId: "DAM-004",
    department: "Finance",
    position: "Accountant",
    attendance: { rate: 99, late: 1, absent: 0 },
    kpi: { score: 94, trend: "up", lastQuarter: 91 },
    supervisorEvaluation: {
      score: 4.7,
      comments: "Exceptional attention to detail",
    },
    training: {
      completed: 9,
      inProgress: 3,
      certifications: [
        "Advanced Accounting",
        "Tax Compliance",
        "Financial Analysis",
      ],
    },
    behavioralCompetencies: {
      score: 4.8,
      categories: ["Accuracy", "Reliability", "Problem Solving"],
    },
    technicalCompetencies: {
      score: 4.6,
      categories: [
        "Financial Reporting",
        "Budget Analysis",
        "Audit Preparation",
      ],
    },
    bonusEligibility: true,
    promotionEligibility: true,
    salaryScale: "Grade 6",
    cases: [
      {
        type: "Achievement",
        description: "Identified cost savings of 15%",
        date: "2023-08-10",
      },
      {
        type: "Achievement",
        description: "Perfect audit result",
        date: "2023-11-05",
      },
    ],
    branchPerformance: { score: 93, rank: 2, targetAchievement: 112 },
    recommendations: [
      "Ideal candidate for Finance Manager position",
      "Recommended for executive leadership program",
      "High potential for CFO track",
    ],
    suitability: {
      trainingField: "Executive Leadership",
      confidence: 98,
      dataSufficiency: "High",
    },
  },
  {
    id: 5,
    name: "Rudi Hartono",
    employeeId: "DAM-005",
    department: "Operations",
    position: "Operations Supervisor",
    attendance: { rate: 96, late: 3, absent: 2 },
    kpi: { score: 89, trend: "up", lastQuarter: 85 },
    supervisorEvaluation: { score: 4.3, comments: "Strong operational skills" },
    training: {
      completed: 7,
      inProgress: 1,
      certifications: ["Operations Management", "Safety Procedures"],
    },
    behavioralCompetencies: {
      score: 4.4,
      categories: ["Leadership", "Decision Making", "Problem Solving"],
    },
    technicalCompetencies: {
      score: 4.5,
      categories: [
        "Route Planning",
        "Schedule Management",
        "Resource Allocation",
      ],
    },
    bonusEligibility: true,
    promotionEligibility: true,
    salaryScale: "Grade 6",
    cases: [
      {
        type: "Achievement",
        description: "Improved operational efficiency by 20%",
        date: "2023-07-15",
      },
    ],
    branchPerformance: { score: 88, rank: 4, targetAchievement: 102 },
    recommendations: [
      "Ready for Operations Manager position",
      "Recommended for advanced operations training",
      "High potential for regional management",
    ],
    suitability: {
      trainingField: "Advanced Operations",
      confidence: 92,
      dataSufficiency: "High",
    },
  },
  {
    id: 6,
    name: "Ani Wijaya",
    employeeId: "DAM-006",
    department: "HR",
    position: "Recruitment Specialist",
    attendance: { rate: 94, late: 4, absent: 4 },
    kpi: { score: 85, trend: "stable", lastQuarter: 84 },
    supervisorEvaluation: {
      score: 4.1,
      comments: "Good recruiter with room for improvement",
    },
    training: {
      completed: 5,
      inProgress: 2,
      certifications: ["Talent Acquisition", "Interview Techniques"],
    },
    behavioralCompetencies: {
      score: 4.2,
      categories: ["Communication", "Interpersonal Skills", "Organization"],
    },
    technicalCompetencies: {
      score: 4.0,
      categories: ["Candidate Sourcing", "Interview Process", "Onboarding"],
    },
    bonusEligibility: true,
    promotionEligibility: false,
    salaryScale: "Grade 4",
    cases: [
      {
        type: "Warning",
        description: "Missed recruitment target",
        date: "2023-03-20",
        severity: "Minor",
      },
    ],
    branchPerformance: { score: 83, rank: 8, targetAchievement: 95 },
    recommendations: [
      "Needs improvement in meeting targets",
      "Recommended for recruitment strategy training",
      "Potential for senior recruiter position",
    ],
    suitability: {
      trainingField: "Recruitment Strategy",
      confidence: 80,
      dataSufficiency: "Medium",
    },
  },
];

// Arrays to store dynamic data for new employee
let newEmployeeCertifications = [];
let newEmployeeBehavioralCategories = [];
let newEmployeeTechnicalCategories = [];
let newEmployeeRecommendations = [];
let newEmployeeCases = [];

// DOM Elements
const loadingScreen = document.getElementById("loadingScreen");
const sidebarToggle = document.getElementById("sidebarToggle");
const sidebar = document.getElementById("sidebar");
const navLinks = document.querySelectorAll(".nav-link[data-tab]");
const addEmployeeBtn = document.getElementById("addEmployeeBtn");
const saveEmployeeBtn = document.getElementById("saveEmployeeBtn");

const tabs = {
  dashboard: document.getElementById("dashboardTab"),
  employees: document.getElementById("employeesTab"),
  analytics: document.getElementById("analyticsTab"),
  recommendations: document.getElementById("recommendationsTab"),
};

const totalEmployees = document.getElementById("totalEmployees");
const statTotalEmployees = document.getElementById("statTotalEmployees");
const statAvgKPI = document.getElementById("statAvgKPI");
const statPromotionReady = document.getElementById("statPromotionReady");
const statNeedsImprovement = document.getElementById("statNeedsImprovement");
const employeeGrid = document.getElementById("employeeGrid");
const employeesGrid = document.getElementById("employeesGrid");
const departmentPerformance = document.getElementById("departmentPerformance");
const performanceDistribution = document.getElementById(
  "performanceDistribution"
);
const trainingNeeds = document.getElementById("trainingNeeds");
const highPotentialList = document.getElementById("highPotentialList");
const developmentOpportunities = document.getElementById(
  "developmentOpportunities"
);
const performanceImprovement = document.getElementById(
  "performanceImprovement"
);

// Filter elements
const filterDepartment = document.getElementById("filterDepartment");
const filterPosition = document.getElementById("filterPosition");
const filterMinKPI = document.getElementById("filterMinKPI");
const filterNoWarnings = document.getElementById("filterNoWarnings");

const empFilterDepartment = document.getElementById("empFilterDepartment");
const empFilterPosition = document.getElementById("empFilterPosition");
const empFilterMinKPI = document.getElementById("empFilterMinKPI");
const empFilterEligibility = document.getElementById("empFilterEligibility");

// Initialize the application
document.addEventListener("DOMContentLoaded", function () {
  // Hide loading screen after 2 seconds
  setTimeout(() => {
    loadingScreen.style.display = "none";
  }, 2000);

  // Update stats
  updateStats();

  // Render initial dashboard
  renderEmployeeGrid(employees, employeeGrid);
  renderEmployeeGrid(employees, employeesGrid);
  renderAnalyticsData();
  renderRecommendations();

  // Sidebar toggle
  sidebarToggle.addEventListener("click", function () {
    sidebar.classList.toggle("show");
    document.querySelector(".main-content").classList.toggle("ml-250");
  });

  // Tab navigation
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      // Remove active class from all links
      navLinks.forEach((l) => l.classList.remove("active"));

      // Add active class to clicked link
      this.classList.add("active");

      // Hide all tabs
      Object.values(tabs).forEach((tab) => tab.classList.add("d-none"));

      // Show selected tab
      const tabId = this.getAttribute("data-tab");
      tabs[tabId].classList.remove("d-none");
    });
  });

  // Add Employee button
  addEmployeeBtn.addEventListener("click", function () {
    resetAddEmployeeForm();
    const addEmployeeModal = new bootstrap.Modal(
      document.getElementById("addEmployeeModal")
    );
    addEmployeeModal.show();
  });

  // Save Employee button
  saveEmployeeBtn.addEventListener("click", function () {
    if (validateEmployeeForm()) {
      saveNewEmployee();
    }
  });

  // Setup dynamic form elements
  setupDynamicFormElements();

  // Filter event listeners
  filterDepartment.addEventListener("change", applyFilters);
  filterPosition.addEventListener("input", applyFilters);
  filterMinKPI.addEventListener("input", applyFilters);
  filterNoWarnings.addEventListener("change", applyFilters);

  empFilterDepartment.addEventListener("change", applyEmployeeFilters);
  empFilterPosition.addEventListener("input", applyEmployeeFilters);
  empFilterMinKPI.addEventListener("input", applyEmployeeFilters);
  empFilterEligibility.addEventListener("change", applyEmployeeFilters);
});

// Setup dynamic form elements
function setupDynamicFormElements() {
  // Certifications
  const certificationInput = document.getElementById("certificationInput");
  certificationInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      e.preventDefault();
      addCertification(this.value);
      this.value = "";
    }
  });

  // Behavioral competencies
  const behavioralInput = document.getElementById("behavioralInput");
  behavioralInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      e.preventDefault();
      addBehavioralCompetency(this.value);
      this.value = "";
    }
  });

  // Technical competencies
  const technicalInput = document.getElementById("technicalInput");
  technicalInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      e.preventDefault();
      addTechnicalCompetency(this.value);
      this.value = "";
    }
  });

  // Recommendations
  const recommendationInput = document.getElementById("recommendationInput");
  recommendationInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      e.preventDefault();
      addRecommendation(this.value);
      this.value = "";
    }
  });

  // Add Case button
  document.getElementById("addCaseBtn").addEventListener("click", addNewCase);
}

// Add certification
function addCertification(cert) {
  if (cert.trim() !== "") {
    newEmployeeCertifications.push(cert.trim());
    updateCertificationList();
    document.getElementById("certificationInput").value = "";
  }
}

// Update certification list
function updateCertificationList() {
  const certificationList = document.getElementById("certificationList");
  const certificationCount = document.getElementById("certificationCount");
  const certificationPlaceholder = document.getElementById(
    "certificationPlaceholder"
  );

  certificationCount.textContent = newEmployeeCertifications.length;

  if (newEmployeeCertifications.length === 0) {
    certificationPlaceholder.style.display = "block";
    certificationList.innerHTML = "";
    certificationPlaceholder.textContent = "No certifications added yet";
  } else {
    certificationPlaceholder.style.display = "none";
    certificationList.innerHTML = "";
    newEmployeeCertifications.forEach((cert, index) => {
      const certElement = document.createElement("div");
      certElement.className =
        "d-flex justify-content-between align-items-center p-2 mb-2 bg-light rounded";
      certElement.innerHTML = `
                        <span>${cert}</span>
                        <button type="button" class="btn btn-sm btn-danger" onclick="removeCertification(${index})">
                            <i class="fas fa-times"></i>
                        </button>
                    `;
      certificationList.appendChild(certElement);
    });
  }
}

// Remove certification
function removeCertification(index) {
  newEmployeeCertifications.splice(index, 1);
  updateCertificationList();
}

// Add behavioral competency
function addBehavioralCompetency(competency) {
  if (competency.trim() !== "") {
    newEmployeeBehavioralCategories.push(competency.trim());
    updateBehavioralList();
    document.getElementById("behavioralInput").value = "";
  }
}

// Update behavioral list
function updateBehavioralList() {
  const behavioralList = document.getElementById("behavioralList");
  const behavioralCount = document.getElementById("behavioralCount");
  const behavioralPlaceholder = document.getElementById(
    "behavioralPlaceholder"
  );

  behavioralCount.textContent = newEmployeeBehavioralCategories.length;

  if (newEmployeeBehavioralCategories.length === 0) {
    behavioralPlaceholder.style.display = "block";
    behavioralList.innerHTML = "";
    behavioralPlaceholder.textContent = "No behavioral competencies added yet";
  } else {
    behavioralPlaceholder.style.display = "none";
    behavioralList.innerHTML = "";
    newEmployeeBehavioralCategories.forEach((cat, index) => {
      const catElement = document.createElement("div");
      catElement.className =
        "d-flex justify-content-between align-items-center p-2 mb-2 bg-light rounded";
      catElement.innerHTML = `
                        <span>${cat}</span>
                        <button type="button" class="btn btn-sm btn-danger" onclick="removeBehavioralCompetency(${index})">
                            <i class="fas fa-times"></i>
                        </button>
                    `;
      behavioralList.appendChild(catElement);
    });
  }
}

// Remove behavioral competency
function removeBehavioralCompetency(index) {
  newEmployeeBehavioralCategories.splice(index, 1);
  updateBehavioralList();
}

// Add technical competency
function addTechnicalCompetency(competency) {
  if (competency.trim() !== "") {
    newEmployeeTechnicalCategories.push(competency.trim());
    updateTechnicalList();
    document.getElementById("technicalInput").value = "";
  }
}

// Update technical list
function updateTechnicalList() {
  const technicalList = document.getElementById("technicalList");
  const technicalCount = document.getElementById("technicalCount");
  const technicalPlaceholder = document.getElementById("technicalPlaceholder");

  technicalCount.textContent = newEmployeeTechnicalCategories.length;

  if (newEmployeeTechnicalCategories.length === 0) {
    technicalPlaceholder.style.display = "block";
    technicalList.innerHTML = "";
    technicalPlaceholder.textContent = "No technical competencies added yet";
  } else {
    technicalPlaceholder.style.display = "none";
    technicalList.innerHTML = "";
    newEmployeeTechnicalCategories.forEach((cat, index) => {
      const catElement = document.createElement("div");
      catElement.className =
        "d-flex justify-content-between align-items-center p-2 mb-2 bg-light rounded";
      catElement.innerHTML = `
                        <span>${cat}</span>
                        <button type="button" class="btn btn-sm btn-danger" onclick="removeTechnicalCompetency(${index})">
                            <i class="fas fa-times"></i>
                        </button>
                    `;
      technicalList.appendChild(catElement);
    });
  }
}

// Remove technical competency
function removeTechnicalCompetency(index) {
  newEmployeeTechnicalCategories.splice(index, 1);
  updateTechnicalList();
}

// Add recommendation
function addRecommendation(recommendation) {
  if (recommendation.trim() !== "") {
    newEmployeeRecommendations.push(recommendation.trim());
    updateRecommendationList();
    document.getElementById("recommendationInput").value = "";
  }
}

// Update recommendation list
function updateRecommendationList() {
  const recommendationList = document.getElementById("recommendationList");
  const recommendationCount = document.getElementById("recommendationCount");
  const recommendationPlaceholder = document.getElementById(
    "recommendationPlaceholder"
  );

  recommendationCount.textContent = newEmployeeRecommendations.length;

  if (newEmployeeRecommendations.length === 0) {
    recommendationPlaceholder.style.display = "block";
    recommendationList.innerHTML = "";
    recommendationPlaceholder.textContent = "No recommendations added yet";
  } else {
    recommendationPlaceholder.style.display = "none";
    recommendationList.innerHTML = "";
    newEmployeeRecommendations.forEach((rec, index) => {
      const recElement = document.createElement("div");
      recElement.className =
        "d-flex justify-content-between align-items-center p-2 mb-2 bg-light rounded";
      recElement.innerHTML = `
                        <span>${rec}</span>
                        <button type="button" class="btn btn-sm btn-danger" onclick="removeRecommendation(${index})">
                            <i class="fas fa-times"></i>
                        </button>
                    `;
      recommendationList.appendChild(recElement);
    });
  }
}

// Remove recommendation
function removeRecommendation(index) {
  newEmployeeRecommendations.splice(index, 1);
  updateRecommendationList();
}

// Add new case
function addNewCase() {
  const casesContainer = document.getElementById("casesContainer");
  const caseIndex = newEmployeeCases.length;

  const caseElement = document.createElement("div");
  caseElement.className = "border rounded p-3 mb-3 bg-light";
  caseElement.innerHTML = `
                <div class="d-flex justify-content-between align-items-center mb-3">
                    <h6 class="mb-0">Case #${caseIndex + 1}</h6>
                    <button type="button" class="btn btn-sm btn-danger" onclick="removeCase(${caseIndex})">
                        <i class="fas fa-trash"></i> Remove
                    </button>
                </div>
                <div class="row g-3">
                    <div class="col-md-4">
                        <label class="form-label">Case Type</label>
                        <select class="form-select case-type" data-index="${caseIndex}">
                            <option value="Achievement">Achievement</option>
                            <option value="Warning">Warning</option>
                        </select>
                    </div>
                    <div class="col-md-8">
                        <label class="form-label">Description</label>
                        <input type="text" class="form-control case-description" data-index="${caseIndex}" placeholder="Enter case description">
                    </div>
                    <div class="col-md-4">
                        <label class="form-label">Date</label>
                        <input type="date" class="form-control case-date" data-index="${caseIndex}">
                    </div>
                    <div class="col-md-4 severity-field" data-index="${caseIndex}" style="display: none;">
                        <label class="form-label">Severity</label>
                        <select class="form-select case-severity" data-index="${caseIndex}">
                            <option value="Minor">Minor</option>
                            <option value="Major">Major</option>
                            <option value="Critical">Critical</option>
                        </select>
                    </div>
                </div>
            `;

  casesContainer.appendChild(caseElement);
  newEmployeeCases.push({
    type: "Achievement",
    description: "",
    date: "",
    severity: "Minor",
  });

  // Add event listener to case type to show/hide severity field
  const caseTypeSelect = caseElement.querySelector(".case-type");
  caseTypeSelect.addEventListener("change", function () {
    const index = this.getAttribute("data-index");
    const severityField = document.querySelector(
      `.severity-field[data-index="${index}"]`
    );
    if (this.value === "Warning") {
      severityField.style.display = "block";
    } else {
      severityField.style.display = "none";
    }
  });
}

// Remove case
function removeCase(index) {
  newEmployeeCases.splice(index, 1);

  // Re-render all cases
  const casesContainer = document.getElementById("casesContainer");
  casesContainer.innerHTML = "";

  newEmployeeCases.forEach((caseItem, i) => {
    const caseElement = document.createElement("div");
    caseElement.className = "border rounded p-3 mb-3 bg-light";
    caseElement.innerHTML = `
                    <div class="d-flex justify-content-between align-items-center mb-3">
                        <h6 class="mb-0">Case #${i + 1}</h6>
                        <button type="button" class="btn btn-sm btn-danger" onclick="removeCase(${i})">
                            <i class="fas fa-trash"></i> Remove
                        </button>
                    </div>
                    <div class="row g-3">
                        <div class="col-md-4">
                            <label class="form-label">Case Type</label>
                            <select class="form-select case-type" data-index="${i}" ${
      caseItem.type === "Warning" ? "selected" : ""
    }>
                                <option value="Achievement" ${
                                  caseItem.type === "Achievement"
                                    ? "selected"
                                    : ""
                                }>Achievement</option>
                                <option value="Warning" ${
                                  caseItem.type === "Warning" ? "selected" : ""
                                }>Warning</option>
                            </select>
                        </div>
                        <div class="col-md-8">
                            <label class="form-label">Description</label>
                            <input type="text" class="form-control case-description" data-index="${i}" value="${
      caseItem.description
    }" placeholder="Enter case description">
                        </div>
                        <div class="col-md-4">
                            <label class="form-label">Date</label>
                            <input type="date" class="form-control case-date" data-index="${i}" value="${
      caseItem.date
    }">
                        </div>
                        <div class="col-md-4 severity-field" data-index="${i}" style="${
      caseItem.type === "Warning" ? "display: block;" : "display: none;"
    }">
                            <label class="form-label">Severity</label>
                            <select class="form-select case-severity" data-index="${i}">
                                <option value="Minor" ${
                                  caseItem.severity === "Minor"
                                    ? "selected"
                                    : ""
                                }>Minor</option>
                                <option value="Major" ${
                                  caseItem.severity === "Major"
                                    ? "selected"
                                    : ""
                                }>Major</option>
                                <option value="Critical" ${
                                  caseItem.severity === "Critical"
                                    ? "selected"
                                    : ""
                                }>Critical</option>
                            </select>
                        </div>
                    </div>
                `;

    casesContainer.appendChild(caseElement);

    // Add event listener to case type to show/hide severity field
    const caseTypeSelect = caseElement.querySelector(".case-type");
    caseTypeSelect.addEventListener("change", function () {
      const idx = this.getAttribute("data-index");
      const severityField = document.querySelector(
        `.severity-field[data-index="${idx}"]`
      );
      if (this.value === "Warning") {
        severityField.style.display = "block";
      } else {
        severityField.style.display = "none";
      }
    });
  });
}

// Validate employee form
function validateEmployeeForm() {
  // Get required fields
  const requiredFields = [
    { id: "employeeName", name: "Full Name" },
    { id: "employeeId", name: "Employee ID" },
    { id: "employeeDepartment", name: "Department" },
    { id: "employeePosition", name: "Position" },
    { id: "salaryScale", name: "Salary Scale" },
    { id: "attendanceRate", name: "Attendance Rate" },
    { id: "daysLate", name: "Days Late" },
    { id: "daysAbsent", name: "Days Absent" },
    { id: "kpiScore", name: "KPI Score" },
    { id: "supervisorScore", name: "Supervisor Evaluation Score" },
    { id: "branchScore", name: "Branch Performance Score" },
    { id: "branchRank", name: "Branch Rank" },
    { id: "targetAchievement", name: "Target Achievement" },
    { id: "behavioralScore", name: "Behavioral Competencies Score" },
    { id: "technicalScore", name: "Technical Competencies Score" },
    { id: "trainingField", name: "Recommended Training Field" },
    { id: "confidenceLevel", name: "Confidence Level" },
  ];

  // Check for empty required fields
  for (let field of requiredFields) {
    const element = document.getElementById(field.id);
    if (element && !element.value.trim()) {
      alert(`Please fill in the required field: ${field.name}`);
      element.focus();
      return false;
    }
  }

  // Validate numeric ranges
  const attendanceRate = parseFloat(
    document.getElementById("attendanceRate").value
  );
  if (isNaN(attendanceRate) || attendanceRate < 0 || attendanceRate > 100) {
    alert("Attendance Rate must be between 0 and 100");
    document.getElementById("attendanceRate").focus();
    return false;
  }

  const kpiScore = parseFloat(document.getElementById("kpiScore").value);
  if (isNaN(kpiScore) || kpiScore < 0 || kpiScore > 100) {
    alert("KPI Score must be between 0 and 100");
    document.getElementById("kpiScore").focus();
    return false;
  }

  const supervisorScore = parseFloat(
    document.getElementById("supervisorScore").value
  );
  if (isNaN(supervisorScore) || supervisorScore < 1 || supervisorScore > 5) {
    alert("Supervisor Evaluation Score must be between 1 and 5");
    document.getElementById("supervisorScore").focus();
    return false;
  }

  const behavioralScore = parseFloat(
    document.getElementById("behavioralScore").value
  );
  if (isNaN(behavioralScore) || behavioralScore < 1 || behavioralScore > 5) {
    alert("Behavioral Competencies Score must be between 1 and 5");
    document.getElementById("behavioralScore").focus();
    return false;
  }

  const technicalScore = parseFloat(
    document.getElementById("technicalScore").value
  );
  if (isNaN(technicalScore) || technicalScore < 1 || technicalScore > 5) {
    alert("Technical Competencies Score must be between 1 and 5");
    document.getElementById("technicalScore").focus();
    return false;
  }

  const confidenceLevel = parseFloat(
    document.getElementById("confidenceLevel").value
  );
  if (isNaN(confidenceLevel) || confidenceLevel < 0 || confidenceLevel > 100) {
    alert("Confidence Level must be between 0 and 100");
    document.getElementById("confidenceLevel").focus();
    return false;
  }

  // Check if at least one certification is added
  if (newEmployeeCertifications.length === 0) {
    alert("Please add at least one certification");
    document.getElementById("certificationInput").focus();
    return false;
  }

  // Check if at least one behavioral competency is added
  if (newEmployeeBehavioralCategories.length === 0) {
    alert("Please add at least one behavioral competency");
    document.getElementById("behavioralInput").focus();
    return false;
  }

  // Check if at least one technical competency is added
  if (newEmployeeTechnicalCategories.length === 0) {
    alert("Please add at least one technical competency");
    document.getElementById("technicalInput").focus();
    return false;
  }

  // Check if at least one recommendation is added
  if (newEmployeeRecommendations.length === 0) {
    alert("Please add at least one recommendation");
    document.getElementById("recommendationInput").focus();
    return false;
  }

  return true;
}

// Save new employee
function saveNewEmployee() {
  // Collect form data
  const newEmployee = {
    id: employees.length > 0 ? Math.max(...employees.map((e) => e.id)) + 1 : 1,
    name: document.getElementById("employeeName").value.trim(),
    employeeId: document.getElementById("employeeId").value.trim(),
    department: document.getElementById("employeeDepartment").value,
    position: document.getElementById("employeePosition").value.trim(),
    attendance: {
      rate: parseFloat(document.getElementById("attendanceRate").value),
      late: parseInt(document.getElementById("daysLate").value),
      absent: parseInt(document.getElementById("daysAbsent").value),
    },
    kpi: {
      score: parseFloat(document.getElementById("kpiScore").value),
      trend: document.getElementById("kpiTrend").value,
      lastQuarter:
        parseFloat(document.getElementById("lastQuarterKPI").value) || 0,
    },
    supervisorEvaluation: {
      score: parseFloat(document.getElementById("supervisorScore").value),
      comments: document.getElementById("supervisorComments").value.trim(),
    },
    training: {
      completed: parseInt(document.getElementById("completedTrainings").value),
      inProgress:
        parseInt(document.getElementById("inProgressTrainings").value) || 0,
      certifications: [...newEmployeeCertifications],
    },
    behavioralCompetencies: {
      score: parseFloat(document.getElementById("behavioralScore").value),
      categories: [...newEmployeeBehavioralCategories],
    },
    technicalCompetencies: {
      score: parseFloat(document.getElementById("technicalScore").value),
      categories: [...newEmployeeTechnicalCategories],
    },
    bonusEligibility: document.getElementById("bonusEligibility").checked,
    promotionEligibility: document.getElementById("promotionEligibility")
      .checked,
    salaryScale: document.getElementById("salaryScale").value,
    cases: [...newEmployeeCases],
    branchPerformance: {
      score: parseFloat(document.getElementById("branchScore").value),
      rank: parseInt(document.getElementById("branchRank").value),
      targetAchievement: parseFloat(
        document.getElementById("targetAchievement").value
      ),
    },
    recommendations: [...newEmployeeRecommendations],
    suitability: {
      trainingField: document.getElementById("trainingField").value.trim(),
      confidence: parseFloat(document.getElementById("confidenceLevel").value),
      dataSufficiency: document.getElementById("dataSufficiency").value,
    },
  };

  // Add to employees array
  employees.push(newEmployee);

  // Update UI
  updateStats();
  renderEmployeeGrid(employees, employeeGrid);
  renderEmployeeGrid(employees, employeesGrid);
  renderAnalyticsData();
  renderRecommendations();

  // Close modal
  const addEmployeeModal = bootstrap.Modal.getInstance(
    document.getElementById("addEmployeeModal")
  );
  addEmployeeModal.hide();

  // Show success message
  alert("Employee successfully added!");
}

// Reset add employee form
function resetAddEmployeeForm() {
  // Reset all form fields
  document.getElementById("employeeName").value = "";
  document.getElementById("employeeId").value = "";
  document.getElementById("employeeDepartment").value = "";
  document.getElementById("employeePosition").value = "";
  document.getElementById("salaryScale").value = "";
  document.getElementById("hireDate").value = "";
  document.getElementById("attendanceRate").value = "";
  document.getElementById("daysLate").value = "";
  document.getElementById("daysAbsent").value = "";
  document.getElementById("bonusEligibility").checked = false;
  document.getElementById("promotionEligibility").checked = false;
  document.getElementById("kpiScore").value = "";
  document.getElementById("lastQuarterKPI").value = "";
  document.getElementById("kpiTrend").value = "up";
  document.getElementById("supervisorScore").value = "";
  document.getElementById("supervisorComments").value = "";
  document.getElementById("branchScore").value = "";
  document.getElementById("branchRank").value = "";
  document.getElementById("targetAchievement").value = "";
  document.getElementById("completedTrainings").value = "";
  document.getElementById("inProgressTrainings").value = "";
  document.getElementById("behavioralScore").value = "";
  document.getElementById("technicalScore").value = "";
  document.getElementById("trainingField").value = "";
  document.getElementById("confidenceLevel").value = "";
  document.getElementById("dataSufficiency").value = "High";

  // Reset dynamic arrays
  newEmployeeCertifications = [];
  newEmployeeBehavioralCategories = [];
  newEmployeeTechnicalCategories = [];
  newEmployeeRecommendations = [];
  newEmployeeCases = [];

  // Update UI for dynamic elements
  updateCertificationList();
  updateBehavioralList();
  updateTechnicalList();
  updateRecommendationList();

  // Clear cases container
  document.getElementById("casesContainer").innerHTML = "";
}

// Update statistics
function updateStats() {
  totalEmployees.textContent = employees.length;
  statTotalEmployees.textContent = employees.length;

  const avgKPI = (
    employees.reduce((sum, emp) => sum + emp.kpi.score, 0) / employees.length
  ).toFixed(1);
  statAvgKPI.textContent = avgKPI;

  const promotionReady = employees.filter(
    (emp) => emp.promotionEligibility
  ).length;
  statPromotionReady.textContent = promotionReady;

  const needsImprovement = employees.filter((emp) => emp.kpi.score < 80).length;
  statNeedsImprovement.textContent = needsImprovement;
}

// Apply filters to dashboard
function applyFilters() {
  const filtered = employees.filter((emp) => {
    return (
      (filterDepartment.value === "" ||
        emp.department === filterDepartment.value) &&
      (filterPosition.value === "" ||
        emp.position
          .toLowerCase()
          .includes(filterPosition.value.toLowerCase())) &&
      (filterMinKPI.value === "" ||
        emp.kpi.score >= parseInt(filterMinKPI.value)) &&
      (!filterNoWarnings.checked ||
        !emp.cases.some((c) => c.type === "Warning"))
    );
  });

  renderEmployeeGrid(filtered, employeeGrid);
}

// Apply filters to employees tab
function applyEmployeeFilters() {
  const filtered = employees.filter((emp) => {
    let matches = true;

    if (empFilterDepartment.value !== "") {
      matches = matches && emp.department === empFilterDepartment.value;
    }

    if (empFilterPosition.value !== "") {
      matches =
        matches &&
        emp.position
          .toLowerCase()
          .includes(empFilterPosition.value.toLowerCase());
    }

    if (empFilterMinKPI.value !== "") {
      matches = matches && emp.kpi.score >= parseInt(empFilterMinKPI.value);
    }

    if (empFilterEligibility.value !== "") {
      if (empFilterEligibility.value === "bonus") {
        matches = matches && emp.bonusEligibility;
      } else if (empFilterEligibility.value === "promotion") {
        matches = matches && emp.promotionEligibility;
      }
    }

    return matches;
  });

  renderEmployeeGrid(filtered, employeesGrid);
}

// Render employee grid
function renderEmployeeGrid(employeeList, container) {
  container.innerHTML = "";

  if (employeeList.length === 0) {
    container.innerHTML =
      '<div class="col-12"><div class="alert alert-info">No employees match the current filters.</div></div>';
    return;
  }

  employeeList.forEach((emp) => {
    const cardClass =
      emp.kpi.score >= 90
        ? "high-potential"
        : emp.kpi.score < 80
        ? "needs-improvement"
        : "";

    const card = document.createElement("div");
    card.className = `col-md-6 col-lg-4`;
    card.innerHTML = `
                    <div class="card employee-card ${cardClass} card-custom" data-id="${
      emp.id
    }">
                        <div class="card-body">
                            <div class="d-flex justify-content-between align-items-start mb-3">
                                <div>
                                    <h5 class="card-title mb-1">${emp.name}</h5>
                                    <p class="card-text text-muted small">${
                                      emp.position
                                    }</p>
                                    <p class="card-text text-muted small">${
                                      emp.department
                                    } • ${emp.employeeId}</p>
                                </div>
                                <div class="text-end">
                                    <div class="badge ${
                                      emp.kpi.score >= 90
                                        ? "bg-success"
                                        : emp.kpi.score >= 80
                                        ? "bg-primary"
                                        : "bg-warning"
                                    }">
                                        KPI: ${emp.kpi.score}
                                    </div>
                                </div>
                            </div>
                            
                            <div class="row g-2 mb-3">
                                <div class="col-6">
                                    <small class="text-muted">Attendance</small>
                                    <div class="fw-bold">${
                                      emp.attendance.rate
                                    }%</div>
                                </div>
                                <div class="col-6">
                                    <small class="text-muted">Bonus Eligible</small>
                                    <div class="fw-bold ${
                                      emp.bonusEligibility
                                        ? "text-success"
                                        : "text-danger"
                                    }">
                                        ${emp.bonusEligibility ? "Yes" : "No"}
                                    </div>
                                </div>
                            </div>
                            
                            <div class="d-flex justify-content-between align-items-center">
                                <span class="badge ${
                                  emp.suitability.confidence >= 90
                                    ? "bg-success"
                                    : emp.suitability.confidence >= 75
                                    ? "bg-warning"
                                    : "bg-danger"
                                }">
                                    Confidence: ${emp.suitability.confidence}%
                                </span>
                                <small class="text-muted">Data: ${
                                  emp.suitability.dataSufficiency
                                }</small>
                            </div>
                        </div>
                    </div>
                `;

    container.appendChild(card);
  });

  // Add click event listeners to employee cards
  document.querySelectorAll(".employee-card").forEach((card) => {
    card.addEventListener("click", function () {
      const employeeId = parseInt(this.getAttribute("data-id"));
      const employee = employees.find((emp) => emp.id === employeeId);
      showEmployeeModal(employee);
    });
  });
}

// Render analytics data
function renderAnalyticsData() {
  // Department Performance
  const departments = ["Operations", "HR", "Maintenance", "Finance"];
  let deptHTML = "";

  departments.forEach((dept) => {
    const deptEmployees = employees.filter((emp) => emp.department === dept);
    const avgKPI =
      deptEmployees.length > 0
        ? (
            deptEmployees.reduce((sum, emp) => sum + emp.kpi.score, 0) /
            deptEmployees.length
          ).toFixed(1)
        : 0;
    const promotionReady = deptEmployees.filter(
      (emp) => emp.promotionEligibility
    ).length;

    deptHTML += `
                    <div class="mb-4 p-3 bg-light rounded">
                        <div class="d-flex justify-content-between align-items-center">
                            <div>
                                <h6 class="fw-bold mb-1">${dept}</h6>
                                <small class="text-muted">${deptEmployees.length} employees</small>
                            </div>
                            <div class="text-end">
                                <div class="fw-bold text-primary">${avgKPI}</div>
                                <small class="text-muted">${promotionReady} promotion ready</small>
                            </div>
                        </div>
                    </div>
                `;
  });

  departmentPerformance.innerHTML = deptHTML;

  // Performance Distribution
  const ranges = [
    { label: "90-100 (Excellent)", min: 90, max: 100, color: "success" },
    { label: "80-89 (Good)", min: 80, max: 89, color: "primary" },
    { label: "70-79 (Average)", min: 70, max: 79, color: "warning" },
    { label: "Below 70 (Needs Improvement)", min: 0, max: 69, color: "danger" },
  ];

  let distHTML = "";

  ranges.forEach((range) => {
    const count = employees.filter(
      (emp) => emp.kpi.score >= range.min && emp.kpi.score <= range.max
    ).length;
    const percentage =
      employees.length > 0 ? ((count / employees.length) * 100).toFixed(1) : 0;

    distHTML += `
                    <div class="mb-4">
                        <div class="d-flex justify-content-between mb-2">
                            <span class="fw-medium">${range.label}</span>
                            <span class="fw-bold">${count} employees (${percentage}%)</span>
                        </div>
                        <div class="progress">
                            <div class="progress-bar bg-${range.color} progress-bar-custom" role="progressbar" style="width: ${percentage}%" aria-valuenow="${percentage}" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                `;
  });

  performanceDistribution.innerHTML = distHTML;

  // Training Needs
  const trainingFields = [
    { field: "Leadership Development", icon: "fa-user-tie" },
    { field: "Conflict Resolution", icon: "fa-handshake" },
    { field: "Time Management", icon: "fa-clock" },
    { field: "Executive Leadership", icon: "fa-chart-line" },
    { field: "Advanced Operations", icon: "fa-cogs" },
    { field: "Recruitment Strategy", icon: "fa-search" },
  ];

  let trainingHTML = '<div class="row g-3">';

  trainingFields.forEach((item) => {
    const count = employees.filter(
      (emp) => emp.suitability.trainingField === item.field
    ).length;

    trainingHTML += `
                    <div class="col-md-6 col-lg-4">
                        <div class="p-3 bg-light border rounded text-center">
                            <div class="mb-2">
                                <i class="fas ${item.icon} fa-2x text-primary"></i>
                            </div>
                            <h6 class="fw-bold mb-1">${item.field}</h6>
                            <div class="display-6 fw-bold text-primary">${count}</div>
                            <small class="text-muted">employees recommended</small>
                        </div>
                    </div>
                `;
  });

  trainingHTML += "</div>";
  trainingNeeds.innerHTML = trainingHTML;
}

// Render recommendations
function renderRecommendations() {
  // High Potential
  const highPotential = employees.filter(
    (emp) => emp.suitability.confidence >= 90 && emp.promotionEligibility
  );
  let highHTML = "";

  highPotential.forEach((emp) => {
    highHTML += `
                    <div class="mb-3 p-3 bg-white bg-opacity-25 rounded">
                        <h6 class="fw-bold mb-1">${emp.name}</h6>
                        <div class="d-flex justify-content-between align-items-center mb-2">
                            <small>KPI: ${emp.kpi.score}</small>
                            <small>Confidence: ${emp.suitability.confidence}%</small>
                        </div>
                        <p class="mb-0 small">${emp.recommendations[0]}</p>
                    </div>
                `;
  });

  if (highPotential.length === 0) {
    highHTML =
      '<p class="text-center text-white-50">No high potential employees found</p>';
  }

  highPotentialList.innerHTML = highHTML;

  // Development Opportunities
  const development = employees.filter(
    (emp) => emp.suitability.confidence >= 75 && emp.suitability.confidence < 90
  );
  let devHTML = "";

  development.forEach((emp) => {
    devHTML += `
                    <div class="mb-3 p-3 bg-white bg-opacity-25 rounded">
                        <h6 class="fw-bold mb-1">${emp.name}</h6>
                        <div class="mb-2">
                            <small>Training: ${emp.suitability.trainingField}</small>
                        </div>
                        <div class="d-flex justify-content-between align-items-center">
                            <small>Confidence: ${emp.suitability.confidence}%</small>
                            <small>Data: ${emp.suitability.dataSufficiency}</small>
                        </div>
                    </div>
                `;
  });

  if (development.length === 0) {
    devHTML =
      '<p class="text-center text-white-50">No development opportunities found</p>';
  }

  developmentOpportunities.innerHTML = devHTML;

  // Performance Improvement
  const improvement = employees.filter(
    (emp) => emp.suitability.confidence < 75
  );
  let impHTML = "";

  improvement.forEach((emp) => {
    impHTML += `
                    <div class="mb-3 p-3 bg-white bg-opacity-25 rounded">
                        <h6 class="fw-bold mb-1">${emp.name}</h6>
                        <div class="d-flex justify-content-between align-items-center mb-2">
                            <small>KPI: ${emp.kpi.score}</small>
                            <small>Confidence: ${emp.suitability.confidence}%</small>
                        </div>
                        <p class="mb-0 small">${emp.recommendations[0]}</p>
                    </div>
                `;
  });

  if (improvement.length === 0) {
    impHTML =
      '<p class="text-center text-white-50">No performance improvement cases found</p>';
  }

  performanceImprovement.innerHTML = impHTML;
}

// Show employee modal
function showEmployeeModal(employee) {
  const modalTitle = document.getElementById("employeeModalTitle");
  const modalBody = document.getElementById("employeeModalBody");

  modalTitle.textContent = `Employee Profile: ${employee.name}`;

  // Build case records HTML
  let casesHTML = "";
  employee.cases.forEach((caseRecord) => {
    const caseClass =
      caseRecord.type === "Achievement"
        ? "border-success bg-success bg-opacity-10"
        : "border-danger bg-danger bg-opacity-10";
    const caseIcon =
      caseRecord.type === "Achievement"
        ? "fa-trophy"
        : "fa-exclamation-triangle";
    const caseTitle =
      caseRecord.type === "Achievement" ? "text-success" : "text-danger";

    casesHTML += `
                    <div class="mb-3 p-3 border-start border-3 ${caseClass} rounded">
                        <div class="d-flex justify-content-between align-items-start">
                            <div>
                                <h6 class="fw-bold ${caseTitle} mb-1">
                                    <i class="fas ${caseIcon} me-2"></i>
                                    ${caseRecord.type}
                                </h6>
                                <p class="mb-1">${caseRecord.description}</p>
                            </div>
                            <div class="text-end">
                                <small class="text-muted">${
                                  caseRecord.date
                                }</small>
                                ${
                                  caseRecord.severity
                                    ? `<div class="mt-1"><span class="badge bg-${
                                        caseRecord.severity === "Major"
                                          ? "danger"
                                          : "warning"
                                      }">${caseRecord.severity}</span></div>`
                                    : ""
                                }
                            </div>
                        </div>
                    </div>
                `;
  });

  // Build certifications HTML
  let certsHTML = "";
  employee.training.certifications.forEach((cert) => {
    certsHTML += `<span class="badge bg-primary me-2 mb-2">${cert}</span>`;
  });

  // Build behavioral competencies HTML
  let behavioralHTML = "";
  employee.behavioralCompetencies.categories.forEach((cat) => {
    behavioralHTML += `<span class="competency-tag">${cat}</span>`;
  });

  // Build technical competencies HTML
  let technicalHTML = "";
  employee.technicalCompetencies.categories.forEach((cat) => {
    technicalHTML += `<span class="competency-tag">${cat}</span>`;
  });

  // Build recommendations HTML
  let recommendationsHTML = "";
  employee.recommendations.forEach((rec) => {
    recommendationsHTML += `
                    <div class="d-flex mb-3">
                        <div class="me-3" style="min-width: 8px;">
                            <div class="w-2 h-2 bg-white rounded-circle mt-2"></div>
                        </div>
                        <div>
                            <p class="mb-0 text-white">${rec}</p>
                        </div>
                    </div>
                `;
  });

  modalBody.innerHTML = `
                <div class="row mb-4">
                    <div class="col-md-8">
                        <h3 class="fw-bold">${employee.name}</h3>
                        <h5 class="text-primary">${employee.position}</h5>
                        <p class="text-muted">${employee.department} • ${
    employee.employeeId
  }</p>
                    </div>
                    <div class="col-md-4 text-md-end">
                        <div class="display-3 fw-bold text-primary">${
                          employee.kpi.score
                        }</div>
                        <p class="text-muted">Overall KPI Score</p>
                    </div>
                </div>
                
                <div class="row mb-4">
                    <div class="col-md-4">
                        <div class="p-3 bg-light rounded">
                            <small class="text-muted">Attendance Rate</small>
                            <div class="fw-bold fs-4">${
                              employee.attendance.rate
                            }%</div>
                            <small class="text-muted">${
                              employee.attendance.late
                            } late, ${employee.attendance.absent} absent</small>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="p-3 bg-light rounded">
                            <small class="text-muted">Supervisor Rating</small>
                            <div class="fw-bold fs-4">${
                              employee.supervisorEvaluation.score
                            }/5.0</div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="p-3 bg-light rounded">
                            <small class="text-muted">Salary Scale</small>
                            <div class="fw-bold fs-4">${
                              employee.salaryScale
                            }</div>
                        </div>
                    </div>
                </div>
                
                <div class="row mb-4">
                    <div class="col-md-6">
                        <div class="p-3 bg-light rounded mb-3">
                            <div class="d-flex justify-content-between align-items-center mb-2">
                                <small class="text-muted">Bonus Eligible</small>
                                <span class="badge ${
                                  employee.bonusEligibility
                                    ? "bg-success"
                                    : "bg-danger"
                                }">
                                    ${employee.bonusEligibility ? "Yes" : "No"}
                                </span>
                            </div>
                        </div>
                        <div class="p-3 bg-light rounded">
                            <div class="d-flex justify-content-between align-items-center mb-2">
                                <small class="text-muted">Promotion Eligible</small>
                                <span class="badge ${
                                  employee.promotionEligibility
                                    ? "bg-success"
                                    : "bg-danger"
                                }">
                                    ${
                                      employee.promotionEligibility
                                        ? "Yes"
                                        : "No"
                                    }
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="p-3 bg-light rounded">
                            <h6 class="fw-bold mb-3">Branch Performance</h6>
                            <div class="row">
                                <div class="col-4">
                                    <small class="text-muted">Score</small>
                                    <div class="fw-bold">${
                                      employee.branchPerformance.score
                                    }</div>
                                </div>
                                <div class="col-4">
                                    <small class="text-muted">Rank</small>
                                    <div class="fw-bold">#${
                                      employee.branchPerformance.rank
                                    }</div>
                                </div>
                                <div class="col-4">
                                    <small class="text-muted">Target</small>
                                    <div class="fw-bold text-success">${
                                      employee.branchPerformance
                                        .targetAchievement
                                    }%</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="row mb-4">
                    <div class="col-md-6">
                        <div class="card">
                            <div class="card-header bg-primary text-white">
                                <h6 class="mb-0">Behavioral Competencies</h6>
                            </div>
                            <div class="card-body">
                                <div class="d-flex justify-content-between mb-3">
                                    <small>Overall Score</small>
                                    <small>${
                                      employee.behavioralCompetencies.score
                                    }/5.0</small>
                                </div>
                                <div class="progress mb-3">
                                    <div class="progress-bar bg-primary progress-bar-custom" role="progressbar" style="width: ${
                                      (employee.behavioralCompetencies.score /
                                        5) *
                                      100
                                    }%" aria-valuenow="${
    (employee.behavioralCompetencies.score / 5) * 100
  }" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <h6 class="fw-bold mb-2">Key Areas:</h6>
                                <div>${behavioralHTML}</div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="card">
                            <div class="card-header bg-info text-white">
                                <h6 class="mb-0">Technical Competencies</h6>
                            </div>
                            <div class="card-body">
                                <div class="d-flex justify-content-between mb-3">
                                    <small>Overall Score</small>
                                    <small>${
                                      employee.technicalCompetencies.score
                                    }/5.0</small>
                                </div>
                                <div class="progress mb-3">
                                    <div class="progress-bar bg-info progress-bar-custom" role="progressbar" style="width: ${
                                      (employee.technicalCompetencies.score /
                                        5) *
                                      100
                                    }%" aria-valuenow="${
    (employee.technicalCompetencies.score / 5) * 100
  }" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <h6 class="fw-bold mb-2">Key Areas:</h6>
                                <div>${technicalHTML}</div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="row mb-4">
                    <div class="col-md-6">
                        <div class="card">
                            <div class="card-header bg-success text-white">
                                <h6 class="mb-0">Training & Certification</h6>
                            </div>
                            <div class="card-body">
                                <div class="row mb-4">
                                    <div class="col-4">
                                        <small class="text-muted">Completed</small>
                                        <div class="fw-bold text-success fs-4">${
                                          employee.training.completed
                                        }</div>
                                    </div>
                                    <div class="col-4">
                                        <small class="text-muted">In Progress</small>
                                        <div class="fw-bold text-warning fs-4">${
                                          employee.training.inProgress
                                        }</div>
                                    </div>
                                    <div class="col-4">
                                        <small class="text-muted">Certifications</small>
                                        <div class="fw-bold text-primary fs-4">${
                                          employee.training.certifications
                                            .length
                                        }</div>
                                    </div>
                                </div>
                                <h6 class="fw-bold mb-2">Certifications:</h6>
                                <div>${certsHTML}</div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="card">
                            <div class="card-header bg-warning text-white">
                                <h6 class="mb-0">Case Records</h6>
                            </div>
                            <div class="card-body">
                                ${
                                  casesHTML ||
                                  '<p class="text-center text-muted">No case records found</p>'
                                }
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="recommendation-box p-4">
                    <h5 class="fw-bold mb-4">AI-Powered Recommendations</h5>
                    ${recommendationsHTML}
                    
                    <div class="mt-4 pt-3 border-top border-white">
                        <h6 class="fw-bold mb-3">Training Suitability</h6>
                        <div class="row">
                            <div class="col-md-6">
                                <small>Recommended Field</small>
                                <div class="fw-bold">${
                                  employee.suitability.trainingField
                                }</div>
                            </div>
                            <div class="col-md-6">
                                <div class="d-flex justify-content-between align-items-center">
                                    <small>Confidence Level</small>
                                    <div class="d-flex align-items-center">
                                        <span class="me-2 fw-bold">${
                                          employee.suitability.confidence
                                        }%</span>
                                        <div class="progress" style="width: 150px;">
                                            <div class="progress-bar bg-white progress-bar-striped progress-bar-animated" role="progressbar" style="width: ${
                                              employee.suitability.confidence
                                            }%" aria-valuenow="${
    employee.suitability.confidence
  }" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="mt-3">
                            <small>Data Sufficiency: <span class="fw-bold">${
                              employee.suitability.dataSufficiency
                            }</span></small>
                            <p class="mb-0 text-white-75">
                                ${
                                  employee.suitability.dataSufficiency ===
                                  "High"
                                    ? "Comprehensive data available for accurate recommendations"
                                    : employee.suitability.dataSufficiency ===
                                      "Medium"
                                    ? "Moderate data available, recommendations based on available information"
                                    : "Limited data available, recommendations may have higher uncertainty"
                                }
                            </p>
                        </div>
                    </div>
                </div>
            `;

  // Show modal
  const modal = new bootstrap.Modal(document.getElementById("employeeModal"));
  modal.show();
}
