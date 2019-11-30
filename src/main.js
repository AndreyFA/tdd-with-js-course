let a = 3
let b = 1

async function main() {
	if (a === 1) {
		a = 2
	} else {
		a = 1
	}

  console.log(a)
}

main()
