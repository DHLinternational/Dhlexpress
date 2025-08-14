const fixedTrackingNumber = "JD014600006512345678";

const shipmentData = {
    status: "In Transit to China",
    progress: 65,
    currentStage: 2,
    events: [
        { date: "2025-08-10", location: "Brussels, Belgium", event: "Shipment picked up" },
        { date: "2025-08-11", location: "Brussels, Belgium", event: "Processed at facility" },
        { date: "2025-08-12", location: "Leipzig, Germany", event: "Departed DHL Hub" },
        { date: "2025-08-13", location: "Shanghai, China", event: "Arrived at destination facility - Pending customs clearance" }
    ]
};

function trackPackage() {
    const input = document.getElementById("trackingNumber").value.trim();
    const resultSection = document.getElementById("trackingResult");
    const statusText = document.getElementById("statusText");
    const progress = document.getElementById("progress");
    const trackingTable = document.getElementById("trackingTable");

    if (input === fixedTrackingNumber) {
        resultSection.classList.remove("hidden");
        statusText.textContent = shipmentData.status;
        progress.style.width = shipmentData.progress + "%";

        document.querySelectorAll(".stage").forEach((stage, index) => {
            if (index < shipmentData.currentStage) {
                stage.classList.add("active");
            }
        });

        trackingTable.innerHTML = "";
        shipmentData.events.forEach(event => {
            trackingTable.innerHTML += `
                <tr>
                    <td>${event.date}</td>
                    <td>${event.location}</td>
                    <td>${event.event}</td>
                </tr>
            `;
        });
    } else {
        alert("Tracking number not found.");
        resultSection.classList.add("hidden");
    }
}