function outer() {

    const arr = []
    let idx = 0

    function add(todo) {
        todo.idx = idx++
        arr.push(todo)
    }
    function removeTodo(num) {
        console.log("remove Todo...")

        arr.filter()

        function getTodo(idx) {
            console.log("get Todo......")
        }

        function getAll() {
            return arr
        }

        function changeAll() {
            for (let i = 0; i < arr.length; i++) {

                arr[i].complete = !arr[i].complete

            }
        }

        const obj = {add: add, removeTodo, getTodo, getAll, changeAll}

        return obj
    }
}

