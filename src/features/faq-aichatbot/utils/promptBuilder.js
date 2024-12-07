export const buildPrompt = (userPrompt, history, reports, points) => {
  const contextPrompt = history
    .map((item) => `User: ${item.user}\nAI: ${item.response}`)
    .join("\n");

  const reportsSummary = reports
    .map(
      (report, index) => `
  Report ${index + 1}:
  - ID Laporan: ${report.id}
  - Lokasi: ${report.location}
  - Deskripsi: ${report.description}
  - Status: ${report.status}
  - Tanggal: ${report.tanggal_laporan}
  - Pelapor: ${report.user.nama_lengkap} (${report.user.email})
        `
    )
    .join("\n");

  const pointsSummary = points
    ? `User Points: ${points}`
    : "User Points: Data not available";

  return `
      You are an AI assistant named Greenly for a website named Greenly. 
      Greenly focuses on guiding and reporting for end users to access all features and manage their reports. 
      Our app also has a gamification feature, where users can earn achievements after completing specific tasks. 
      Additionally, our app is equipped with a web dashboard.

      Remaining points owned by the user:
       ${pointsSummary}
       Tell the user that the points can be exchanged. user can go to the home page then click "Tukar Poin". 
       Then the user will be directed to WA to confirm with the admin to exchange the points for an e-wallet
    
      Available Reports:
      ${reportsSummary}
  
      Please assist users with consultations about the website and its features, and help them navigate through the tasks and achievements they can accomplish.
      And just answer according to what is asked, you can give suggestions to users regarding things they can ask.
  
      Use Indonesian langguage for the answer.
      
      ${contextPrompt}
      User: ${userPrompt}
      Greenly Assistant:
    `;
};
