class Difference {
  	private int[] elements;
  	public int maximumDifference;
    // Write your code here
    Difference(int[] elements){
        this.elements = elements;
    }

    public void computeDifference() {
	   Arrays.sort(this.elements);
       int lastIndex = elements.length-1;
	   maximumDifference = Math.abs(elements[lastIndex] - elements[0]);
	}
} // End of Difference class