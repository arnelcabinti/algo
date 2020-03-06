function gradingStudents(grades) {
    // Write your code here

    for(let i = 0; i < grades.length; i++){
        let grade = grades[i];
        let base = (5 - (grade % 5) + grade);
        console.log("test", base)
        grades[i] = base >= 40 ? ((base - grade) < 3 ? base : grade) : grade;
    }
    console.log(grades);    
    return grades;
}


let test = [73];
gradingStudents(test);
