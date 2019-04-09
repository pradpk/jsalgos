let a = [100,32,67,135,245,22,23];
console.log("Lomuto partition scheme");
console.log("Before starting--" + a);
console.log(quicksort(a, 0, a.length-1));

function quicksort(a, lo, hi) {
	if(lo < hi) {
		p = partition(a, lo, hi);
		quicksort(a, lo, p-1);
		quicksort(a, p+1, hi);
	}
	return a;
}

function partition(a, lo, hi) {
	pivot = a[hi];
	i = lo;
	for(j=lo;j<hi;j++) {
		if(a[j] < pivot) {
			tmp = a[i];
			a[i] = a[j];
			a[j] = tmp;
			i=i+1;
		}
	}	
	tmp = a[i];
	a[i] = a[hi];
	a[hi] = tmp;
	console.log("Step -> " + a +  "piv: " + i);
	return i;
}



