function out() {
    const uncVar = "inaccessible";


    function inn() {
        console.log(uncVar);
    }

    const inspect = {
        inn: inn
    };

    return inspect;
}

const inspect = out();

inspect.inn();
