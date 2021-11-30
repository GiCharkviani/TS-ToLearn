// Code goes here!
// ცლასების ნეიმინგ კონვენციაა - დიდი ასოთი დაწყება
class Department {

    // private depName:string; // დეფაულტზეა
    private employees: string[] = []; // პირდაპირ გარედან ვერ მიწვდებიან ობიექტში ამ ფროფერთის. იგი ასევე მეთოდებთანაც შეგიძლია გამოიყენო და ეგ მეთოდები მხოლოდ შიგნით იქნება ხელმისაწვდომი.

    constructor(private readonly id:string, public depName:string) {
        this.depName = depName;
        this.id = id

        /// კონსტრუქტორშივე თუ ვუწერთ აქსეს მოდიფაიერს, იგი ავტომატურად შეუქმნის ობიექტს ფროფერთიებს

        // readonly - იგი ნიშნავს, რომ ამ ფროფერთის ინიციალიზების მერე, ანუ რაც კონსტრუქტორში მოხდება, მის მერე ვეღარ შევცვლით
    } 
    // constructor გაეშვება მაშინ, როცა ობიექტი შეიქმნება new - ქივორდით, ანუ ახალი ინსტანსი. იგი ინიციალიზებაში იღებს მონაწილეობას - ფროფერთიების და მნიშვნელობების.

    describe() {
        console.log(`Department: (${this.id}): ${this.depName}`)
    }

    solveDescribe(this:Department) {
        console.log('Department: ' + this.depName)
    } 
    // ამ შემთხვევაში Type-Safety-ს განვსაზღვრავთ, რათა სხვა ობიექტის მიერ არ მოხდეს ამ მეთოდის გამოძახება. this არგუმენტად არ ნიშნავს რომ არგუმენტს მოითხოვს მეთოდი.

    addEmployee(employee:string) {
        this.employees.push(employee)
    }

    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees)
    }
}

const accounting = new Department('d1','Accounting') // შეიქმნება ობიექტი class-ის ბლუპრინტზე დაყრდნობით

accounting.addEmployee('Max')
accounting.addEmployee('Manu')

// accounting.employees.push('Anna') // ეს არაა სასურველი

accounting.printEmployeeInformation()

// JS-ში კომპილირების შემდეგ, name ცალკე ფილდად არ იარსებებს, რადგან ჯერ es6 მას მხარს არ უჭერს

// const acccountingCopy = { describe: accounting.describe }
// acccountingCopy.describe() // undefined

// this - ქივორდი ამ უკანასკნელ შემთხვევაში არ იმუშავებს, რადგან იგი მიმართავს იმ ობიექტს, რომელიც პასუხისმგებელია მის გამოძახებაზე. ვინაიდან ეს უკანასკნელი არ ფლობს depName ფროფერთის, იგი undefined იქნება


// const accountingCopy1 = {depName: 'Solving prop!', solveDescribe: accounting.solveDescribe, describe: accounting.describe}

// accountingCopy1.solveDescribe()

// მხოლოდ ამ უკანასკნელ შემთხვევაში შევძლებდით გამოსწორებას, ანუ თუ მივამსგავსებდით იგივე ობიექტს, რომლიდანაც მოაქვს მეთოდი.