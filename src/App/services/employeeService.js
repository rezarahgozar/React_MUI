const KEYS = {
    employees:'employees',
    emploteeId:'emploteeId'
}
export const getDepartmentCollection = () => ([
    {id:'1',title:'Development'},
    {id:'2',title:'Marketing'},
    {id:'3',title:'Accounting'},
    {id:'4',title:'HR'}
])

export function insertEmployee(data) {
    let employees = getAllEmployees();
    data['id'] = generateEmploymentId()
    employees.push(data);
    localStorage.setItem(KEYS.employees,JSON.stringify(employees))
}

export function generateEmploymentId(){
    if(localStorage.getItem(KEYS.emploteeId) == null)
        localStorage.setItem(KEYS.emploteeId,'0')
    var id = parseInt(localStorage.getItem(KEYS.emploteeId))
    localStorage.setItem(KEYS.emploteeId,(++id).toString())
    return id;
}

export function getAllEmployees() {
    if(localStorage.getItem(KEYS.employees)== null)
        localStorage.setItem(KEYS.employees,JSON.stringify([]))

    return JSON.parse(localStorage.getItem(KEYS.employees))
}