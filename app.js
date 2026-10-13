const kudrPackageItems = [
  { parameter: "Suhu", method: "6.4/IK/GQA/016" },
  { parameter: "Kelembapan", method: "6.4/IK/GQA/016" },
  { parameter: "Laju Ventilasi", method: "ASHRAE Std 55-1992" },
  { parameter: "Formaldehid", method: "Direct Reading" },
  { parameter: "CO2", method: "6.4/IK/GQA/044" },
  { parameter: "CO", method: "6.4/IK/GQA/072" },
  { parameter: "NO2", method: "6.4/IK/GQA/LK/002" },
  { parameter: "O2", method: "Direct Reading" },
  { parameter: "O3", method: "6.4/IK/GQA/LK/001" },
  { parameter: "PM10", method: "Direct Reading" },
  { parameter: "TVOC", method: "Direct Reading" },
  { parameter: "Total Bakteri", method: "NIOSH 0800" },
  { parameter: "Total Jamur", method: "NIOSH 0800" },
];

const riskRegister = {
  KUDR: kudrPackageItems,
  Kimia: [
    { parameter: "Cobalt", method: "NIOSH 7303" },
    { parameter: "Nikel", method: "NIOSH 7303" },
    { parameter: "Cadmium", method: "NIOSH 7303" },
    { parameter: "Chromium", method: "NIOSH 7303" },
    { parameter: "Timbal", method: "NIOSH 7303" },
    { parameter: "Besi", method: "NIOSH 7303" },
    { parameter: "Silikon Dioksida, SiO2", method: "NIOSH 7303" },
    { parameter: "Kalsium Oksida, CaO", method: "NIOSH 7303" },
    { parameter: "Magnesium Oksida, MgO", method: "NIOSH 7303" },
    { parameter: "Alumunium", method: "NIOSH 7303" },
    { parameter: "Dust PM 10 (Inhalable) Area*", method: "6.4-IK-GQA-076" },
    { parameter: "Dust PM 2.5 (Respirable) Area*", method: "6.4-IK-GQA-076" },
    { parameter: "Dust PM 10 (Inhalable) Personal", method: "NIOSH 0500" },
    { parameter: "Dust PM 2.5 (Respirable) Personal", method: "NIOSH 0600" },
    { parameter: "Asbestos", method: "NIOSH 7400" },
    { parameter: "Benzene", method: "NIOSH 1501" },
    { parameter: "Toluene", method: "NIOSH 1501" },
    { parameter: "Xylene", method: "NIOSH 1501" },
    { parameter: "Methyle Ethyle Ketone", method: "NIOSH 2500" },
    { parameter: "Isoprophyl Alcohol", method: "NIOSH 1400" },
    { parameter: "Methanol", method: "NIOSH 2000" },
    { parameter: "Karbon Dioksida, CO2*", method: "6.4/IK/GQA/044" },
    { parameter: "Karbon Monoksida, CO*", method: "6.4/IK/GQA/072" },
    { parameter: "Nitrogen Diksida, NO2*", method: "6.4/IK/GQA/LK/002" },
    { parameter: "Oksidan, O3*", method: "6.4/IK/GQA/LK/001" },
    { parameter: "TVOC", method: "NIOSH 2549" },
    { parameter: "Sulfur Dioksida, SO2*", method: "SNI 7119-2:2017" },
    { parameter: "Karbon Monoksida, CO*", method: "6.4/IK/GQA/072" },
    { parameter: "Nitrogen Diksida, NO2*", method: "6.4/IK/GQA/LK/002" },
    { parameter: "Oksidan, O3*", method: "6.4/IK/GQA/LK/001" },
    { parameter: "Amonia, NH3*", method: "SNI 19-7119.1-2005" },
    { parameter: "Hidrogen Sulfida, H2S", method: "MASA Method 701" },
  ],
  Fisika: [
    { parameter: "Radiasi Non-Pengion Elektrometri (EMF)", method: "Direct Reading" },
    { parameter: "Kebisingan Area", method: "SNI 7062:2009" },
    { parameter: "Kebisingan Personal", method: "SNI 7062:2009" },
    { parameter: "WBV", method: "ISO 2631-1" },
    { parameter: "HAV", method: "ISO 5349-1" },
    { parameter: "Pencahayaan", method: "SNI 16-7062-2004" },
    { parameter: "ISBB", method: "SNI 7061:2019" },
    { parameter: "Suhu", method: "SNI 7061:2019 / IK/GQA" },
    { parameter: "Radiasi UV", method: "ACGIH TLV / IK/GQA" },
    { parameter: "Radiasi EMF", method: "ICNIRP / IK/GQA" },
  ],
  Ergonomi: [
    { parameter: "SNI 9011:2021", method: "SNI 9011:2021" },
    { parameter: "REBA", method: "REBA" },
    { parameter: "RULA", method: "RULA" },
    { parameter: "ROSA", method: "ROSA" },
  ],
  Psikososial: [
    { parameter: "Survey Diagnostic Stress", method: "Survey Diagnostic Stress" },
  ],
  Sanitasi: [
    { parameter: "Observasi", method: "Observasi" },
  ],
};

const icons = {
  calculator:
    '<svg aria-hidden="true" viewBox="0 0 24 24"><rect x="4" y="3" width="16" height="18" rx="2"></rect><path d="M8 7h8M8 11h.01M12 11h.01M16 11h.01M8 15h.01M12 15h.01M16 15h.01"></path></svg>',
  trash:
    '<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M3 6h18M8 6V4h8v2M6 6l1 16h10l1-16"></path></svg>',
};

const state = {
  rows: [],
  activeRowId: null,
};

const elements = {
  navItems: document.querySelectorAll(".nav-item"),
  views: document.querySelectorAll(".view"),
  addRow: document.querySelector("#add-row"),
  rows: document.querySelector("#parameter-rows"),
  emptyState: document.querySelector("#empty-state"),
  printDocument: document.querySelector("#print-document"),
  companyName: document.querySelector("#company-name"),
  companyAddress: document.querySelector("#company-address"),
  modal: document.querySelector("#calculator-modal"),
  closeModal: document.querySelector("#close-modal"),
  cancelModal: document.querySelector("#cancel-modal"),
  applyCalculation: document.querySelector("#apply-calculation"),
  resetCalculator: document.querySelector("#reset-calculator"),
  calculatorTemplate: document.querySelector("#calculator-template"),
};

const calculators = new Map();

function uid() {
  if (window.crypto?.randomUUID) return window.crypto.randomUUID();
  return `row-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function createOption(value, label = value, selected = false, disabled = false) {
  const option = document.createElement("option");
  option.value = value;
  option.textContent = label;
  option.selected = selected;
  option.disabled = disabled;
  return option;
}

function getMethod(factor, parameter) {
  return riskRegister[factor]?.find((item) => item.parameter === parameter)?.method ?? "";
}

function isKudrRow(row) {
  return row.factor === "KUDR";
}

function getParameterExportText(row) {
  if (!isKudrRow(row)) return row.parameter;
  return kudrPackageItems.map((item) => item.parameter).join("\n");
}

function getMethodExportText(row) {
  if (!isKudrRow(row)) return row.method;
  return kudrPackageItems.map((item) => item.method).join("\n");
}

function addRow() {
  state.rows.push({
    id: uid(),
    factor: "",
    parameter: "",
    method: "",
    sample: "",
  });
  renderRows();
}

function updateRow(id, patch) {
  state.rows = state.rows.map((row) => (row.id === id ? { ...row, ...patch } : row));
}

function removeRow(id) {
  state.rows = state.rows.filter((row) => row.id !== id);
  renderRows();
}

function renderRows() {
  elements.rows.replaceChildren();
  elements.emptyState.classList.toggle("visible", state.rows.length === 0);

  state.rows.forEach((row) => {
    const tr = document.createElement("tr");
    tr.dataset.rowId = row.id;

    const factorCell = document.createElement("td");
    const factorField = document.createElement("label");
    factorField.className = "field";
    const factorSelect = document.createElement("select");
    factorSelect.dataset.field = "factor";
    factorSelect.append(createOption("", "Pilih faktor bahaya", row.factor === "", true));
    Object.keys(riskRegister).forEach((factor) => {
      factorSelect.append(createOption(factor, factor, row.factor === factor));
    });
    factorField.append(factorSelect);
    factorCell.append(factorField);

    const parameterCell = document.createElement("td");
    const parameterField = document.createElement("label");
    parameterField.className = "field";
    if (isKudrRow(row)) {
      const packageList = document.createElement("ul");
      packageList.className = "package-list parameter-list";
      kudrPackageItems.forEach((item) => {
        const listItem = document.createElement("li");
        listItem.textContent = item.parameter;
        packageList.append(listItem);
      });
      parameterField.append(packageList);
    } else {
      const parameterSelect = document.createElement("select");
      parameterSelect.dataset.field = "parameter";
      parameterSelect.disabled = !row.factor;
      parameterSelect.append(createOption("", row.factor ? "Pilih parameter" : "Pilih faktor dahulu", row.parameter === "", true));
      (riskRegister[row.factor] ?? []).forEach((item) => {
        parameterSelect.append(createOption(item.parameter, item.parameter, row.parameter === item.parameter));
      });
      parameterField.append(parameterSelect);
    }
    parameterCell.append(parameterField);

    const methodCell = document.createElement("td");
    if (isKudrRow(row)) {
      const methodList = document.createElement("ul");
      methodList.className = "package-list method-list";
      kudrPackageItems.forEach((item) => {
        const listItem = document.createElement("li");
        listItem.textContent = item.method;
        methodList.append(listItem);
      });
      methodCell.append(methodList);
    } else {
      const methodOutput = document.createElement("div");
      methodOutput.className = "method-output";
      methodOutput.textContent = row.method || "Terisi otomatis setelah parameter dipilih";
      methodCell.append(methodOutput);
    }

    const sampleCell = document.createElement("td");
    const sampleControl = document.createElement("div");
    sampleControl.className = "sample-control";
    const sampleInput = document.createElement("input");
    sampleInput.type = "number";
    sampleInput.min = "0";
    sampleInput.step = "1";
    sampleInput.inputMode = "numeric";
    sampleInput.placeholder = "0";
    sampleInput.value = row.sample;
    sampleInput.dataset.field = "sample";
    const calculatorButton = document.createElement("button");
    calculatorButton.className = "icon-button calculator";
    calculatorButton.type = "button";
    calculatorButton.dataset.action = "open-calculator";
    calculatorButton.setAttribute("aria-label", "Hitung jumlah sampel");
    calculatorButton.title = "Hitung jumlah sampel";
    calculatorButton.innerHTML = icons.calculator;
    sampleControl.append(sampleInput, calculatorButton);
    sampleCell.append(sampleControl);

    const actionCell = document.createElement("td");
    actionCell.className = "row-actions";
    const removeButton = document.createElement("button");
    removeButton.className = "icon-button danger";
    removeButton.type = "button";
    removeButton.dataset.action = "remove-row";
    removeButton.setAttribute("aria-label", "Hapus parameter");
    removeButton.title = "Hapus parameter";
    removeButton.innerHTML = icons.trash;
    actionCell.append(removeButton);

    tr.append(factorCell, parameterCell, methodCell, sampleCell, actionCell);
    elements.rows.append(tr);
  });
}

function switchView(viewName) {
  elements.navItems.forEach((item) => {
    item.classList.toggle("active", item.dataset.view === viewName);
  });

  elements.views.forEach((view) => {
    view.classList.toggle("active", view.id === `${viewName}-view`);
  });
}

function readPositiveNumber(value) {
  const number = Number(value);
  return Number.isFinite(number) && number > 0 ? number : 0;
}

function setupCalculator(root, scope) {
  const content = elements.calculatorTemplate.content.cloneNode(true);
  root.append(content);

  const tabs = root.querySelectorAll(".tab");
  const panels = root.querySelectorAll(".calculator-card");
  const psychPopulation = root.querySelector("[data-psych-population]");
  const psychResult = root.querySelector("[data-psych-result]");
  const personalTotal = root.querySelector("[data-personal-total]");
  const personalResult = root.querySelector("[data-personal-result]");
  const personalRounded = root.querySelector("[data-personal-rounded]");
  const errorRadios = root.querySelectorAll('input[name="psych-error"]');

  errorRadios.forEach((radio) => {
    radio.name = `psych-error-${scope}`;
  });

  function activeTab() {
    return root.querySelector(".tab.active")?.dataset.tab ?? "psychology";
  }

  function calculatePsychology() {
    const population = readPositiveNumber(psychPopulation.value);
    const checkedError = root.querySelector(`input[name="psych-error-${scope}"]:checked`);
    const error = Number(checkedError?.value ?? 0.05);
    const raw = population ? population / (1 + population * error * error) : 0;
    const rounded = raw ? Math.ceil(raw) : 0;
    psychResult.textContent = String(rounded);
    return { raw, rounded };
  }

  function calculatePersonal() {
    const total = readPositiveNumber(personalTotal.value);
    const z = 1.96;
    const p = 0.5;
    const d = 0.2;
    const variance = z * z * p * (1 - p);
    const denominator = (total - 1) * d * d + variance;
    const raw = total ? (total * variance) / denominator : 0;
    const rounded = raw ? Math.ceil(raw) : 0;
    personalResult.textContent = raw.toFixed(2);
    personalRounded.textContent = String(rounded);
    return { raw, rounded };
  }

  function calculateAll() {
    calculatePsychology();
    calculatePersonal();
  }

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const selected = tab.dataset.tab;
      tabs.forEach((item) => {
        const isActive = item.dataset.tab === selected;
        item.classList.toggle("active", isActive);
        item.setAttribute("aria-selected", String(isActive));
      });
      panels.forEach((panel) => {
        panel.classList.toggle("active", panel.dataset.panel === selected);
      });
      calculateAll();
    });
  });

  root.addEventListener("input", calculateAll);
  root.addEventListener("change", calculateAll);
  calculateAll();

  const api = {
    reset() {
      psychPopulation.value = "";
      personalTotal.value = "";
      root.querySelector(`input[name="psych-error-${scope}"][value="0.05"]`).checked = true;
      calculateAll();
    },
    getRoundedResult() {
      return activeTab() === "psychology" ? calculatePsychology().rounded : calculatePersonal().rounded;
    },
  };

  calculators.set(scope, api);
  return api;
}

function openCalculatorModal(rowId) {
  state.activeRowId = rowId;
  elements.modal.hidden = false;
  calculators.get("modal")?.reset();
  setTimeout(() => {
    elements.modal.querySelector("input")?.focus();
  }, 0);
}

function closeCalculatorModal() {
  elements.modal.hidden = true;
  state.activeRowId = null;
}

function applyCalculationToRow() {
  const result = calculators.get("modal")?.getRoundedResult() ?? 0;
  if (!result) {
    window.alert("Masukkan data kalkulator terlebih dahulu.");
    return;
  }

  updateRow(state.activeRowId, { sample: String(result) });
  renderRows();
  closeCalculatorModal();
}

function documentRows() {
  return state.rows.filter((row) => row.factor && row.parameter);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function formatDocumentCell(value) {
  return escapeHtml(value || "-").replaceAll("\n", "<br />");
}

function slug(value) {
  return String(value)
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
    .slice(0, 60);
}


async function loadSignatureBase64() {
  const response = await fetch("./ttd-manajer.png");

  if (!response.ok) {
    throw new Error("Gambar tanda tangan tidak ditemukan.");
  }

  const blob = await response.blob();

  return await new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;

    reader.readAsDataURL(blob);
  });
}


async function buildDocumentHtml() {
  const signatureBase64 = await loadSignatureBase64();
  const company = elements.companyName.value.trim() || "-";
  const address = elements.companyAddress.value.trim() || "-";
  const rows = documentRows();
  const printedAt = new Intl.DateTimeFormat("id-ID", {
    dateStyle: "long",
  }).format(new Date());

  const rowHtml = rows
    .map(
      (row, index) => `
        <tr>
          <td>${index + 1}</td>
          <td>${escapeHtml(row.factor)}</td>
          <td>${formatDocumentCell(getParameterExportText(row))}</td>
          <td>${formatDocumentCell(getMethodExportText(row))}</td>
          <td>${escapeHtml(row.sample || "-")}</td>
        </tr>`,
    )
    .join("");

  return `<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Kaji Ulang Analisis - ${escapeHtml(company)}</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        color: #111;
        margin: 36px;
        line-height: 1.45;
      }
      .doc-header {
        display: table;
        width: 100%;
        border: 1px solid #111;
        margin-bottom: 20px;
      }
      .doc-header > div {
        display: table-cell;
        padding: 10px 12px;
        border-right: 1px solid #111;
        vertical-align: middle;
      }
      .doc-header > div:last-child {
        border-right: 0;
        text-align: right;
        width: 220px;
      }
      h1 {
        margin: 0;
        font-size: 18px;
        text-transform: uppercase;
      }
      .meta {
        width: 100%;
        border-collapse: collapse;
        margin-bottom: 18px;
      }
      .meta td {
        padding: 6px 0;
      }
      .meta td:first-child {
        width: 170px;
        font-weight: bold;
      }
      table.data {
        width: 100%;
        border-collapse: collapse;
      }
      table.data th,
      table.data td {
        border: 1px solid #111;
        padding: 8px;
        vertical-align: top;
      }
      table.data th {
        text-align: center;
        background: #e9e9e9;
     

.signature {
  width: 100%;
  margin-top: 36px;
  border-collapse: collapse;
  table-layout: fixed;
}

.signature td {
  width: 50%;
  height: 150px;
  padding: 0;
  vertical-align: top;
  text-align: left;
}

.signature-title {
  font-family: Arial, sans-serif;
  font-size: 14px;
  margin-bottom: 2px;
}

.signature-image {
  display: block;
  width: 125px;
  height: 90px;
  object-fit: contain;
  object-position: left center;
  margin: 0;
}

.signature-space {
  height: 123px;
}

.signature-line {
  display: block;
  width: 180px;
  border-bottom: 1px solid #111;
  height: 1px;
  margin-top: 0;
}

.signature-position {
  font-family: Arial, sans-serif;
  font-size: 14px;
  margin-top: 0;
}
      .small {
        font-size: 11px;
      }

    </style>


  </head>
  <body>
    <div class="doc-header">
      <div>
        <h1>Kaji Ulang Analisis</h1>
        <div>Industrial Hygiene - GQA</div>
      </div>
      <div>
        <strong>7.1/FR/GQA/05-Rev 00</strong><br />
        <span class="small">Tanggal cetak: ${escapeHtml(printedAt)}</span>
      </div>
    </div>

    <table class="meta">
      <tr>
        <td>Nama Perusahaan</td>
        <td>: ${escapeHtml(company)}</td>
      </tr>
      <tr>
        <td>Alamat</td>
        <td>: ${escapeHtml(address).replaceAll("\n", "<br />")}</td>
      </tr>
    </table>

    <table class="data">
      <thead>
        <tr>
          <th>No.</th>
          <th>Faktor Bahaya</th>
          <th>Parameter</th>
          <th>Metode</th>
          <th>Jumlah Sampel</th>
        </tr>
      </thead>
      <tbody>${rowHtml}</tbody>
    </table>



<table
  width="100%"
  cellpadding="0"
  cellspacing="0"
  style="width:100%; border-collapse:collapse; margin-top:36px;"
>
  <tr>
    <!-- KOLOM KIRI -->
    <td
      width="50%"
      valign="top"
      style="width:50%; vertical-align:top; padding:0;"
    >
      <p style="font-family:Arial,sans-serif; font-size:14px; margin:0;">
        Disusun oleh,
      </p>

      <table
        cellpadding="0"
        cellspacing="0"
        style="border-collapse:collapse; margin:0;"
      >
        <tr>
          <td
            height="100"
            valign="middle"
            style="height:100px; vertical-align:middle; padding:0;"
          >
            <img
              src="${signatureBase64}"
              alt="Tanda tangan Manajer Teknis"
              width="125"
              height="90"
              style="display:block; width:125px; height:90px;"
            />
          </td>
        </tr>
        <tr>
          <td
            style="font-family:Arial,sans-serif; font-size:14px; padding:0;"
          >
            (Manajer Teknis)
          </td>
        </tr>
      </table>
    </td>

    <!-- KOLOM KANAN -->
    <td
      width="50%"
      valign="top"
      style="width:50%; vertical-align:top; padding:0;"
    >
      <p style="font-family:Arial,sans-serif; font-size:14px; margin:0;">
        Dikaji oleh,
      </p>

      <table
        width="50%"
        cellpadding="0"
        cellspacing="0"
        style="width:50%; border-collapse:collapse;"
      >
        <tr>
          <td
            height="122"
            style="height:122px; padding:0; border-bottom:none;"
          ></td>
        </tr>
        <tr>
          <td
            width="50"
            style="width:50px; border-bottom:1px solid #111; height:1px; padding:0;"
          ></td>
        </tr>
      </table>
    </td>
  </tr>
</table>


  </body>
</html>`;
}

async function downloadDocument() {
  const rows = documentRows();
  if (!rows.length) {
    window.alert("Tambahkan minimal satu parameter lengkap sebelum mencetak dokumen.");
    return;
  }

  const html = await buildDocumentHtml();
  const blob = new Blob(["\ufeff", html], { type: "application/msword;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  const fileSlug = slug(elements.companyName.value) || "dokumen-gqa";
  link.href = url;
  link.download = `Kaji-Ulang-${fileSlug}.doc`;
  document.body.append(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function bindEvents() {
  elements.navItems.forEach((item) => {
    item.addEventListener("click", () => switchView(item.dataset.view));
  });

  elements.addRow.addEventListener("click", addRow);
  elements.printDocument.addEventListener("click", downloadDocument);
  elements.closeModal.addEventListener("click", closeCalculatorModal);
  elements.cancelModal.addEventListener("click", closeCalculatorModal);
  elements.applyCalculation.addEventListener("click", applyCalculationToRow);
  elements.resetCalculator.addEventListener("click", () => calculators.get("page")?.reset());

  elements.modal.addEventListener("click", (event) => {
    if (event.target === elements.modal) closeCalculatorModal();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !elements.modal.hidden) closeCalculatorModal();
  });

  elements.rows.addEventListener("change", (event) => {
    const field = event.target.dataset.field;
    if (!field) return;

    const rowId = event.target.closest("tr")?.dataset.rowId;
    if (!rowId) return;

    if (field === "factor") {
      const factor = event.target.value;
      const isKudr = factor === "KUDR";
      updateRow(rowId, {
        factor,
        parameter: isKudr ? getParameterExportText({ factor }) : "",
        method: isKudr ? getMethodExportText({ factor }) : "",
      });
      renderRows();
      return;
    }

    if (field === "parameter") {
      const row = state.rows.find((item) => item.id === rowId);
      const method = getMethod(row.factor, event.target.value);
      updateRow(rowId, {
        parameter: event.target.value,
        method,
      });
      renderRows();
    }
  });

  elements.rows.addEventListener("input", (event) => {
    if (event.target.dataset.field !== "sample") return;
    const rowId = event.target.closest("tr")?.dataset.rowId;
    updateRow(rowId, { sample: event.target.value });
  });

  elements.rows.addEventListener("click", (event) => {
    const actionButton = event.target.closest("[data-action]");
    if (!actionButton) return;
    const rowId = actionButton.closest("tr")?.dataset.rowId;
    if (actionButton.dataset.action === "remove-row") removeRow(rowId);
    if (actionButton.dataset.action === "open-calculator") openCalculatorModal(rowId);
  });
}

function init() {
  document.querySelectorAll(".calculator-shell").forEach((root) => {
    setupCalculator(root, root.dataset.calculator);
  });
  bindEvents();
  renderRows();
}

init();
