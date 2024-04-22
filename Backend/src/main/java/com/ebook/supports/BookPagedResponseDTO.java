package com.ebook.supports;

public class BookPagedResponseDTO {
	private int current;
	private long total;
	private int pagesize;
	public BookPagedResponseDTO() {
		super();
		// TODO Auto-generated constructor stub
	}
	public BookPagedResponseDTO(int current, long total, int pagesize) {
		super();
		this.current = current;
		this.total = total;
		this.pagesize = pagesize;
	}
	public int getCurrent() {
		return current;
	}
	public void setCurrent(int current) {
		this.current = current;
	}
	public long getTotal() {
		return total;
	}
	public void setTotal(long total) {
		this.total = total;
	}
	public int getPagesize() {
		return pagesize;
	}
	public void setPagesize(int pagesize) {
		this.pagesize = pagesize;
	}
	@Override
	public String toString() {
		return "BookPagedResponseDTO [current=" + current + ", total=" + total + ", pagesize=" + pagesize + "]";
	}
	
	
}
