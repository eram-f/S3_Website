const apiURL = 'https://al0e0ga8x7.execute-api.eu-north-1.amazonaws.com/1';

async function updateVisitorCount() {
  try {
    const response = await fetch(apiURL, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    document.getElementById('count').innerText = data.visitor_count;
  } catch (error) {
    console.error('Error fetching visitor count:', error);
  }
}

// Call updateVisitorCount on page load
window.onload = updateVisitorCount;
