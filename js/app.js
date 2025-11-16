const sectorData = {
  finance: {
    name: "Finance",
    icon: "💰",
    description: "Berlin's financial sector and economic performance",
    metrics: {
      "GDP 2024": "LOADING...",
      "GDP Growth 2023": "1.6%",
      "Debt Rating": "AAA",
      "Economic Liability Burden": "65.3%",
      "Net Adjusted Debt 2022": "€65.9 billion",
      "Operating Revenue 2022": "€36.5 billion",
      "Tax Revenue Share": "77.6%"
    },
    institutions: [
      "Berlin Hyp (real estate financing)",
      "Investment Bank Berlin",
      "Deutsche Bundesbank regional office"
    ],
    chartData: {
      labels: ['Tax Revenue', 'Other Revenue', 'Debt Service'],
      data: [77.6, 22.4, 65.3],
      type: 'doughnut'
    }
  },
  healthcare: {
    name: "Healthcare",
    icon: "🏥",
    description: "Berlin's healthcare ecosystem and medical innovation",
    metrics: {
      "Healthcare Companies": "22,500",
      "Total Employees": "410,000",
      "Hospitals": "145",
      "Hospital Beds": "35,800",
      "Biotech Companies": "280",
      "MedTech Companies": "356",
      "Pharmaceutical Companies": "35",
      "Digital Health Startups": "200+"
    },
    institutions: [
      "Charité - Universitätsmedizin Berlin",
      "Berlin Institute of Health (BIH)",
      "Max Delbrück Center (MDC)",
      "Labor Berlin - largest hospital lab in Europe"
    ],
    specializations: [
      "Digital therapeutics",
      "Bioinformatics",
      "Artificial intelligence in healthcare",
      "Cell and gene therapy",
      "Precision diagnostics"
    ],
    chartData: {
      labels: ['Biotech (280)', 'MedTech (356)', 'Pharma (35)', 'Digital Health (200+)'],
      data: [280, 356, 35, 200],
      type: 'bar'
    }
  },
  neuroscience: {
    name: "Neuroscience",
    icon: "🧠",
    description: "Berlin's neuroscience research and brain health innovation",
    metrics: {
      "Research Centers": "12+",
      "Major Clusters": "NeuroCure Excellence Cluster",
      "Funding Periods": "4 (since 2007)",
      "Stroke Research Centers": "Center for Stroke Research Berlin (CSB)"
    },
    institutions: [
      "Charité Neuroscience Research Center",
      "Berlin Institute for Foundations of Learning and Data (BIFOLD)",
      "Cognitive Neurology Lab",
      "Berlin School of Mind and Brain",
      "Einstein Center for Neurosciences"
    ],
    researchAreas: [
      "Neurodegeneration (Alzheimer's, Parkinson's)",
      "Stroke research and treatment",
      "Computational neuroscience",
      "Brain organoids and neural networks",
      "Cognitive disorders and rehabilitation"
    ],
    chartData: {
      labels: ['Neurodegeneration', 'Stroke Research', 'Computational', 'Brain Organoids', 'Cognitive Disorders'],
      data: [25, 20, 22, 18, 15],
      type: 'radar'
    }
  },
  life_sciences: {
    name: "Life Sciences",
    icon: "🔬",
    description: "Berlin's biotechnology and life sciences sector",
    metrics: {
      "Total Companies": "672",
      "Total Employees": "34,229",
      "Biotech Companies": "281",
      "Biotech Employees": "7,183",
      "Technology Parks": "8",
      "Total Area": "250,000 sqm",
      "Annual Revenue": "€32 billion"
    },
    hubs: [
      "Campus Berlin-Buch",
      "BerlinBioCube startup center",
      "Technology parks across Berlin-Brandenburg"
    ],
    specializations: [
      "Red biotechnology (pharmaceutical applications)",
      "Gene and cell therapies",
      "Computational biology",
      "Medical informatics",
      "Precision medicine"
    ],
    chartData: {
      labels: ['2020 (€25B)', '2021 (€28B)', '2022 (€30B)', '2023 (€31B)', '2024 (€32B)'],
      data: [25, 28, 30, 31, 32],
      type: 'line'
    }
  },
  startup_ecosystem: {
    name: "Startup Ecosystem",
    icon: "🚀",
    description: "Berlin's dynamic startup and entrepreneurship landscape",
    metrics: {
      "Global Ranking": "7th globally",
      "Startups Founded Yearly": "500+",
      "Total Funding 2024": "€2.4 billion",
      "Ecosystem Growth 2025": "20.7%",
      "Total Startups": "2,002",
      "Total Funding All Time": "$5.37B",
      "B2B Focus": "26.8% SaaS solutions"
    },
    strengths: [
      "Resource attraction",
      "Global connectedness",
      "Diverse funding landscape",
      "International talent pool"
    ],
    challenges: [
      "Scale-up rate improvement needed",
      "Women underrepresentation",
      "Employee participation barriers"
    ],
    chartData: {
      labels: ['2020 (€1.8B)', '2021 (€2.0B)', '2022 (€2.1B)', '2023 (€2.3B)', '2024 (€2.4B)'],
      data: [1.8, 2.0, 2.1, 2.3, 2.4],
      type: 'line'
    }
  },
  smart_city: {
    name: "Smart City",
    icon: "🏙️",
    description: "Berlin's digital transformation and smart city initiatives",
    metrics: {
      "Strategy": "Gemeinsam Digital Berlin",
      "Implementation Period": "2021-2026",
      "Pilot Projects": "5 funded projects",
      "Broadband Index": "95.5",
      "Fiber Optic Index": "40.5",
      "5G Coverage": "100.0%",
      "Open Data Portal": "100.0%",
      "Smart Traffic Management": "100.0%"
    },
    focusAreas: [
      "Digital transformation",
      "Participatory governance",
      "Sustainable urban development",
      "Climate adaptation"
    ],
    chartData: {
      labels: ['Broadband (95.5%)', 'Fiber (40.5%)', '5G (100%)', 'Open Data (100%)', 'Traffic (100%)'],
      data: [95.5, 40.5, 100, 100, 100],
      type: 'bar'
    }
  },
  climate_environment: {
    name: "Climate & Environment",
    icon: "🌱",
    description: "Berlin's climate action and environmental sustainability",
    metrics: {
      "Climate Neutrality Target": "2045",
      "CO2 Reduction 2030": "70%",
      "CO2 Reduction 2040": "90%",
      "Climate Severity Score": "48/100 (High)",
      "Temperature Change 15yr": "+0.5°C",
      "Rainfall Change": "-23.07%",
      "Tropical Nights Current": "15 per year",
      "Tropical Nights 2050": "30+ per year"
    },
    initiatives: [
      "Berlin Energy and Climate Protection Programme (BEK 2030)",
      "Urban heat island mitigation",
      "Green space cooling zones",
      "Climate adaptation measures"
    ],
    chartData: {
      labels: ['2030 (-70% CO₂)', '2040 (-90% CO₂)', '2045 (Carbon Neutral)'],
      data: [70, 90, 100],
      type: 'bar'
    }
  },
  mobility: {
    name: "Mobility",
    icon: "🚌",
    description: "Berlin's transportation and mobility analytics",
    metrics: {
      "Data Platform": "Digital Platform Urban Transport (DPS)",
      "Mobility Data Hub": "100+ public datasets",
      "Weather Stations": "21 (11 active)",
      "Measurement Frequency": "100,000 readings/day"
    },
    infrastructure: [
      "Integrated traffic management",
      "Real-time traffic data",
      "Environmental monitoring",
      "Multimodal transport options",
      "Digital test field for urban traffic"
    ],
    chartData: {
      labels: ['Traffic (100K)', 'Weather (21K)', 'Transport (50K)', 'Environment (30K)'],
      data: [100000, 21000, 50000, 30000],
      type: 'doughnut'
    }
  },
  innovation: {
    name: "Innovation",
    icon: "💡",
    description: "Berlin's innovation ecosystem and research landscape",
    metrics: {
      "Cluster Strategy": "innoBB 2025",
      "Main Clusters": "5 defined clusters",
      "Pro FIT Funding": "Research, Innovation, Technology program"
    },
    clusters: [
      "ICT, Media & Creative Industries",
      "Health Industry",
      "Energy Technology",
      "Optics & Photonics",
      "Transport, Mobility & Logistics"
    ],
    chartData: {
      labels: ['ICT/Media (25%)', 'Health (22%)', 'Energy (20%)', 'Optics (18%)', 'Transport (15%)'],
      data: [25, 22, 20, 18, 15],
      type: 'doughnut'
    }
  }
};

let currentChart = null;

function formatGDP(value) {
  if (typeof value === "string" && value.toLowerCase().includes('billion')) {
    let num = value.replace(/[^0-9.,]/g, '').replace(',', '.');
    return `€${parseFloat(num).toFixed(1)}B`;
  }
  return value;
}

async function loadAnalyticsData() {
  try {
    const resp = await fetch('data/berlin-highlights-data.json');
    const data = await resp.json();
    if (data.highlights && data.highlights.gdp_2024 && data.highlights.gdp_2024.value) {
      const gdpStr = data.highlights.gdp_2024.value;
      const gdpUi = formatGDP(gdpStr);
      sectorData.finance.metrics["GDP 2024"] = `€${gdpStr}`;
      document.querySelectorAll('.stat-value').forEach(el => {
        if (
          el.nextElementSibling &&
          el.nextElementSibling.textContent.trim() === "GDP"
        ) {
          el.textContent = gdpUi;
        }
      });
      document.querySelectorAll('.sector-card').forEach(card => {
        if (
          card.innerHTML.includes('Finance') &&
          card.querySelector('.sector-stat')
        ) {
          card.querySelector('.sector-stat').textContent = `${gdpUi} GDP`;
        }
      });
      // added to force GDP rendering on html page and subpage
      showOverview();
      if (
        document.getElementById('current-section') &&
        document.getElementById('current-section').textContent === 'Finance'
      ) {
        showSector("finance");
      }
    }
  } catch (err) {
    console.error("Failed to load berlin-highlights-data.json", err);
  }
}

async function loadLastUpdated() {
  try {
    const resp = await fetch('data/last-updated.json');
    const data = await resp.json();
    if (data.lastUpdated && document.getElementById('last-updated')) {
      document.getElementById('last-updated').textContent = data.lastUpdated;
    }
  } catch (err) {
    console.error("Failed to load last-updated.json", err);
  }
}

function showOverview() {
  document.getElementById('overview-page').classList.add('active');
  document.getElementById('sector-page').classList.remove('active');
  document.getElementById('current-section').textContent = 'Overview';
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('active');
  });
  document.querySelector('.nav-link[onclick="showOverview()"]').classList.add('active');
}

function showSector(sectorKey) {
  const sector = sectorData[sectorKey];
  if (!sector) return;
  document.getElementById('overview-page').classList.remove('active');
  document.getElementById('sector-page').classList.add('active');
  document.getElementById('current-section').textContent = sector.name;
  document.getElementById('sector-icon').textContent = sector.icon;
  document.getElementById('sector-title').textContent = sector.name;
  document.getElementById('sector-description').textContent = sector.description;
  populateMetrics(sector.metrics);
  updateChart(sector);
  populateDetails(sector);
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('active');
  });
  document.querySelector(`.nav-link[data-sector="${sectorKey}"]`).classList.add('active');
}

function populateMetrics(metrics) {
  const metricsGrid = document.getElementById('metrics-grid');
  metricsGrid.innerHTML = '';
  Object.entries(metrics).forEach(([key, value]) => {
    const metricCard = document.createElement('div');
    metricCard.className = 'metric-card';
    metricCard.innerHTML = `<div class="metric-label">${key}</div>
                            <div class="metric-value">${value}</div>`;
    metricsGrid.appendChild(metricCard);
  });
}

function updateChart(sector) {
  // Add chart rendering logic for your chosen charting library if needed
}

function populateDetails(sector) {
  // Add sector-specific details if needed
}

window.addEventListener('DOMContentLoaded', () => {
  loadLastUpdated()
    .catch(err => {
      console.error("Failed to fetch last updated date:", err);
    });

  loadAnalyticsData()
    .then(() => {
      showOverview();
      if (
        document.getElementById('current-section') &&
        document.getElementById('current-section').textContent === 'Finance'
      ) {
        showSector("finance");
      }
    })
    .catch(err => {
      console.error("Failed to fetch analytics data:", err);
      // Optionally render fallback UI here
      showOverview(); // Still try to build the basic overview even on error
    });
});

