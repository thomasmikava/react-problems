
const existingProblemCodes = new Set(["CNT", "ASD", "CNC", "MNA"]);

function generateProblemCode() {
    do {
        const code = generateCode(3);
        if (!existingProblemCodes.has(code)) {
            existingProblemCodes.add(code);
            return code;
        }
    } while(1);
}

function generateCode(length) {
    let mask = "";
    mask += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    let result = "";
	for (let i = 0; i < length; ++i) {
        result += mask[Math.floor(Math.random() * mask.length)];
    }
	return result;
}
