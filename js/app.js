// Berlin Analytics Dashboard JavaScript

// Sector data
const sectorData = {
  finance: {
    name: "Finance",
    icon: "💰",
    description: "Berlin's financial sector and economic performance",
    metrics: {
      "GDP 2023": "€193.2 billion",
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
      labels: ['Biotech', 'MedTech', 'Pharmaceutical', 'Digital Health'],
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
      labels: ['2020', '2021', '2022', '2023', '2024'],
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
      labels: ['2020', '2021', '2022', '2023', '2024'],
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
      labels: ['Broadband', 'Fiber Optic', '5G Coverage', 'Open Data', 'Traffic Mgmt'],
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
      labels: ['2030 Target', '2040 Target', '2045 Target'],
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
      labels: ['Traffic Data', 'Weather Data', 'Transport Data', 'Environmental'],
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
      labels: ['ICT/Media', 'Health', 'Energy Tech', 'Optics', 'Transport'],
      data: [25, 22, 20, 18, 15],
      type: 'doughnut'
    }
  }
};

// Current state
let currentChart = null;

// Navigation functions
function showOverview() {
  document.getElementById('overview-page').classList.add('active');
  document.getElementById('sector-page').classList.remove('active');
  document.getElementById('current-section').textContent = 'Overview';
  
  // Update nav links
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('active');
  });
  document.querySelector('.nav-link[onclick="showOverview()"]').classList.add('active');
}

function showSector(sectorKey) {
  const sector = sectorData[sectorKey];
  if (!sector) return;
  
  // Hide overview, show sector page
  document.getElementById('overview-page').classList.remove('active');
  document.getElementById('sector-page').classList.add('active');
  document.getElementById('current-section').textContent = sector.name;
  
  // Update sector page content
  document.getElementById('sector-icon').textContent = sector.icon;
  document.getElementById('sector-title').textContent = sector.name;
  document.getElementById('sector-description').textContent = sector.description;
  
  // Update metrics
  populateMetrics(sector.metrics);
  
  // Update chart
  updateChart(sector);
  
  // Update details
  populateDetails(sector);
  
  // Update nav
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('active');
  });
}

function populateMetrics(metrics) {
  const metricsGrid = document.getElementById('metrics-grid');
  metricsGrid.innerHTML = '';
  
  Object.entries(metrics).forEach(([key, value]) => {
    const metricCard = document.createElement('div');
    metricCard.className = 'metric-card';
    metricCard.innerHTML = `
      <div class="metric-value">${value}</div>
      <div class="metric-label">${key}</div>
    `;
    metricsGrid.appendChild(metricCard);
  });
}

function updateChart(sector) {
  const ctx = document.getElementById('sectorChart').getContext('2d');
  
  // Destroy existing chart
  if (currentChart) {
    currentChart.destroy();
  }
  
  const chartColors = ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F', '#DB4545', '#D2BA4C', '#964325', '#944454', '#13343B'];
  
  const chartData = sector.chartData;
  document.getElementById('chart-title').textContent = `${sector.name} Analytics`;
  
  let config = {
    type: chartData.type,
    data: {
      labels: chartData.labels,
      datasets: [{
        label: sector.name,
        data: chartData.data,
        backgroundColor: chartColors.slice(0, chartData.data.length),
        borderColor: chartColors.slice(0, chartData.data.length),
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'bottom'
        }
      }
    }
  };
  
  // Customize based on chart type
  if (chartData.type === 'line') {
    config.data.datasets[0].fill = false;
    config.data.datasets[0].tension = 0.1;
    config.data.datasets[0].backgroundColor = chartColors[0];
    config.data.datasets[0].borderColor = chartColors[0];
    config.options.scales = {
      y: {
        beginAtZero: true
      }
    };
  } else if (chartData.type === 'bar') {
    config.options.scales = {
      y: {
        beginAtZero: true
      }
    };
  } else if (chartData.type === 'radar') {
    config.data.datasets[0].backgroundColor = 'rgba(31, 184, 205, 0.2)';
    config.data.datasets[0].borderColor = '#1FB8CD';
    config.data.datasets[0].pointBackgroundColor = '#1FB8CD';
  }
  
  currentChart = new Chart(ctx, config);
}

function populateDetails(sector) {
  const detailsContent = document.getElementById('details-content');
  detailsContent.innerHTML = '';
  
  // Add institutions if they exist
  if (sector.institutions) {
    const institutionsCard = document.createElement('div');
    institutionsCard.className = 'detail-card';
    institutionsCard.innerHTML = `
      <h3 class="detail-title">Major Institutions</h3>
      <ul class="detail-list">
        ${sector.institutions.map(institution => `<li>${institution}</li>`).join('')}
      </ul>
    `;
    detailsContent.appendChild(institutionsCard);
  }
  
  // Add specializations if they exist
  if (sector.specializations) {
    const specializationsCard = document.createElement('div');
    specializationsCard.className = 'detail-card';
    specializationsCard.innerHTML = `
      <h3 class="detail-title">Specializations</h3>
      <ul class="detail-list">
        ${sector.specializations.map(spec => `<li>${spec}</li>`).join('')}
      </ul>
    `;
    detailsContent.appendChild(specializationsCard);
  }
  
  // Add research areas if they exist
  if (sector.researchAreas) {
    const researchCard = document.createElement('div');
    researchCard.className = 'detail-card';
    researchCard.innerHTML = `
      <h3 class="detail-title">Research Areas</h3>
      <ul class="detail-list">
        ${sector.researchAreas.map(area => `<li>${area}</li>`).join('')}
      </ul>
    `;
    detailsContent.appendChild(researchCard);
  }
  
  // Add hubs if they exist
  if (sector.hubs) {
    const hubsCard = document.createElement('div');
    hubsCard.className = 'detail-card';
    hubsCard.innerHTML = `
      <h3 class="detail-title">Innovation Hubs</h3>
      <ul class="detail-list">
        ${sector.hubs.map(hub => `<li>${hub}</li>`).join('')}
      </ul>
    `;
    detailsContent.appendChild(hubsCard);
  }
  
  // Add strengths if they exist
  if (sector.strengths) {
    const strengthsCard = document.createElement('div');
    strengthsCard.className = 'detail-card';
    strengthsCard.innerHTML = `
      <h3 class="detail-title">Key Strengths</h3>
      <ul class="detail-list">
        ${sector.strengths.map(strength => `<li>${strength}</li>`).join('')}
      </ul>
    `;
    detailsContent.appendChild(strengthsCard);
  }
  
  // Add challenges if they exist
  if (sector.challenges) {
    const challengesCard = document.createElement('div');
    challengesCard.className = 'detail-card';
    challengesCard.innerHTML = `
      <h3 class="detail-title">Current Challenges</h3>
      <ul class="detail-list">
        ${sector.challenges.map(challenge => `<li>${challenge}</li>`).join('')}
      </ul>
    `;
    detailsContent.appendChild(challengesCard);
  }
  
  // Add focus areas if they exist
  if (sector.focusAreas) {
    const focusCard = document.createElement('div');
    focusCard.className = 'detail-card';
    focusCard.innerHTML = `
      <h3 class="detail-title">Focus Areas</h3>
      <ul class="detail-list">
        ${sector.focusAreas.map(area => `<li>${area}</li>`).join('')}
      </ul>
    `;
    detailsContent.appendChild(focusCard);
  }
  
  // Add initiatives if they exist
  if (sector.initiatives) {
    const initiativesCard = document.createElement('div');
    initiativesCard.className = 'detail-card';
    initiativesCard.innerHTML = `
      <h3 class="detail-title">Key Initiatives</h3>
      <ul class="detail-list">
        ${sector.initiatives.map(initiative => `<li>${initiative}</li>`).join('')}
      </ul>
    `;
    detailsContent.appendChild(initiativesCard);
  }
  
  // Add infrastructure if they exist
  if (sector.infrastructure) {
    const infrastructureCard = document.createElement('div');
    infrastructureCard.className = 'detail-card';
    infrastructureCard.innerHTML = `
      <h3 class="detail-title">Infrastructure</h3>
      <ul class="detail-list">
        ${sector.infrastructure.map(item => `<li>${item}</li>`).join('')}
      </ul>
    `;
    detailsContent.appendChild(infrastructureCard);
  }
  
  // Add clusters if they exist
  if (sector.clusters) {
    const clustersCard = document.createElement('div');
    clustersCard.className = 'detail-card';
    clustersCard.innerHTML = `
      <h3 class="detail-title">Innovation Clusters</h3>
      <ul class="detail-list">
        ${sector.clusters.map(cluster => `<li>${cluster}</li>`).join('')}
      </ul>
    `;
    detailsContent.appendChild(clustersCard);
  }
}

// Search functionality
function searchMetrics() {
  const searchTerm = document.getElementById('searchInput').value.toLowerCase();
  if (!searchTerm) return;
  
  // Find sectors containing the search term
  const results = [];
  Object.entries(sectorData).forEach(([key, sector]) => {
    // Search in sector name
    if (sector.name.toLowerCase().includes(searchTerm)) {
      results.push({ sector: key, type: 'sector', name: sector.name });
    }
    
    // Search in metrics
    Object.entries(sector.metrics).forEach(([metricKey, metricValue]) => {
      if (metricKey.toLowerCase().includes(searchTerm) || metricValue.toLowerCase().includes(searchTerm)) {
        results.push({ sector: key, type: 'metric', name: `${sector.name}: ${metricKey}` });
      }
    });
  });
  
  if (results.length > 0) {
    const firstResult = results[0];
    showSector(firstResult.sector);
    
    // Show alert with all results
    const resultNames = results.map(r => r.name).join('\n');
    alert(`Found ${results.length} results:\n\n${resultNames}`);
  } else {
    alert('No results found for: ' + searchTerm);
  }
}

// Allow search on Enter key
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('searchInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      searchMetrics();
    }
  });
  
  // Show overview by default
  showOverview();
});
