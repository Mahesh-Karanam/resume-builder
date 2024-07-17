module.exports = (data) => {
  return `
    <html>
      <head>
        <title>${data.firstname} ${data.lastname}'s Resume</title>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; }
          .container { margin: 0 auto; max-width: 800px; padding: 20px; }
          .header, .section { margin-bottom: 20px; }
          .header { text-align: center; }
          h1 { margin-bottom: 5px; }
          .section-title { font-size: 1.5em; margin-bottom: 10px; border-bottom: 2px solid #000; padding-bottom: 5px; }
          .section-content { margin-left: 20px; }
          .education-item, .internship-item { margin-bottom: 10px; }
          .education-item h3, .internship-item h3 { margin: 0; }
          .education-item p, .internship-item p { margin: 0; font-size: 0.9em; color: #555; }
          ul { padding-left: 20px; }
          ul li { margin-bottom: 5px; }
          .page-break { page-break-before: always; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>${data.firstname} ${data.lastname}</h1>
            <p>Email: ${data.email}</p>
            <p>Phone: ${data.phone}</p>
            <p>GitHub: ${data.github}</p>
            <p>LinkedIn: ${data.linkedin}</p>
          </div>
          <div class="section">
            <h2 class="section-title">About Me</h2>
            <div class="section-content">
              <p>${data.aboutMe}</p>
            </div>
          </div>
          <div class="section">
            <h2 class="section-title">Educational Details</h2>
            <div class="section-content">
              ${data.education.map(edu => `
                <div class="education-item">
                  <h3>${edu.degree} - ${edu.institution}</h3>
                  <p>${edu.startYear} - ${edu.endYear}</p>
                </div>
              `).join('')}
            </div>
          </div>
          <div class="section">
            <h2 class="section-title">Skills</h2>
            <div class="section-content">
              <ul>
                ${data.skills.map(skill => `<li>${skill}</li>`).join('')}
              </ul>
            </div>
          </div>
          <div class="section page-break">
            <h2 class="section-title">Achievements</h2>
            <div class="section-content">
              <ul>
                ${data.achievements.map(achievement => `<li>${achievement}</li>`).join('')}
              </ul>
            </div>
          </div>
          <div class="section">
            <h2 class="section-title">Internships</h2>
            <div class="section-content">
              ${data.internships.map(internship => `
                <div class="internship-item">
                  <h3>${internship.role} at ${internship.company}</h3>
                  <p>${internship.startDate} - ${internship.endDate}</p>
                  <p>${internship.description}</p>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      </body>
    </html>
  `;
};
