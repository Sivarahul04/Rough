
    function generateSemesters() {
      const semCount = parseInt(document.getElementById("semCount").value);
      const semSection = document.getElementById("semestersSection");
      semSection.innerHTML = "";

      for (let i = 1; i <= semCount; i++) {
        const semDiv = document.createElement("div");
        semDiv.className = "semester";
        semDiv.innerHTML = `
          <h3>Semester ${i}</h3>
          <input type="number" class="subject-count" data-sem="${i}" placeholder="Number of Subjects" required />
          <button type="button" onclick="generateSubjects(${i})">Add Subjects</button>
          <div class="subjects" id="subjects-${i}"></div>
        `;
        semSection.appendChild(semDiv);
      }
    }

    function generateSubjects(semId) {
      const subCount = parseInt(
        document.querySelector(`.subject-count[data-sem="${semId}"]`).value
      );
      const subjectDiv = document.getElementById(`subjects-${semId}`);
      subjectDiv.innerHTML = "";

      for (let i = 1; i <= subCount; i++) {
        subjectDiv.innerHTML += `
          <div class="subject">
            <input type="text" placeholder="Subject Name" required />
            <select required>
              <option value="O">O</option>
              <option value="A+">A+</option>
              <option value="A">A</option>
              <option value="B+">B+</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
            </select>
            <input type="number" placeholder="Credits" required />
          </div>
        `;
      }
    }

    document.getElementById("gradingForm").addEventListener("submit", function (e) {
      e.preventDefault();

      const student = {
        name: document.getElementById("name").value,
        roll: document.getElementById("roll").value,
        dept: document.getElementById("dept").value,
        semesters: [],
      };

      const semesters = document.querySelectorAll(".semester");
      semesters.forEach((sem, index) => {
        const subjects = sem.querySelectorAll(".subject");
        const subjectList = [];

        subjects.forEach((sub) => {
          const name = sub.querySelector('input[type="text"]').value;
          const grade = sub.querySelector('select').value.toUpperCase();
          const credit = parseInt(sub.querySelector('input[type="number"]').value);
          const gradePoint = getGradePoint(grade);

          subjectList.push({ name, grade, credit, gradePoint });
        });

        student.semesters.push(subjectList);
      });

      calculateResults(student);
    });

    function getGradePoint(grade) {
      switch (grade) {
        case "O": return 10;
        case "A+": return 9;
        case "A": return 8;
        case "B+": return 7;
        case "B": return 6;
        case "C": return 5;
        case "D": return 4;
        default: return 0; // F or invalid grade
      }
    }

    function getGradeClassification(cgpa) {
      if (cgpa >= 9) return "Outstanding";
      else if (cgpa >= 8) return "Excellent";
      else if (cgpa >= 7) return "Very Good";
      else if (cgpa >= 6) return "Good";
      else if (cgpa >= 5) return "Average";
      else return "Fail";
    }

    function calculateResults(student) {
      const resultDiv = document.getElementById("resultSection");
      resultDiv.innerHTML = `<h2>Result for ${student.name}</h2>
        <p>Roll No: ${student.roll}</p>
        <p>Department: ${student.dept}</p>`;

      let totalWeightedSgpa = 0, totalCredits = 0;

      student.semesters.forEach((subjects, index) => {
        let totalGradePoints = 0, semCredits = 0;
        subjects.forEach((s) => {
          totalGradePoints += s.gradePoint * s.credit;
          semCredits += s.credit;
        });

        const sgpa = semCredits === 0 ? 0 : totalGradePoints / semCredits;
        resultDiv.innerHTML += `<p>Semester ${index + 1} SGPA: ${sgpa.toFixed(2)}</p>`;

        totalWeightedSgpa += sgpa * semCredits;
        totalCredits += semCredits;
      });

      const cgpa = totalCredits === 0 ? 0 : totalWeightedSgpa / totalCredits;
      const grade = getGradeClassification(cgpa);

      resultDiv.innerHTML += `<h3>Final CGPA: ${cgpa.toFixed(2)}</h3>`;
      resultDiv.innerHTML += `<h3>Classification: ${grade}</h3>`;
    }
