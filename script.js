function toCase(text) {
  // write your code here
	if(str="")
	{
		return "-";
	}
	let strlowercase=text.toLowerCase();
	let struppercase=text.toUpperCase();
	return strlowercase+"-"+struppercase
}

// DO not change the code below

const text = prompt("Enter text:");


alert(toCase(text));
