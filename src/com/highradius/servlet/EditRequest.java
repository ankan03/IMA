package com.highradius.servlet;

public class EditRequest {
	String doc_id;
	String updated_amount;
	String note;
	String [] arr;
			
public String[] getArr() {
		return arr;
	}
	public void setArr(String[] arr) {
		this.arr = arr;
	}
	//			 arr:myArray['1','2','3','4','5']
	public String getDoc_id() {
		return doc_id;
	}
	public void setDoc_id(String doc_id) {
		this.doc_id = doc_id;
	}
	public String getUpdated_amount() {
		return updated_amount;
	}
	public void setUpdated_amount(String updated_amount) {
		this.updated_amount = updated_amount;
	}
	public String getNote() {
		return note;
	}
	public void setNote(String note) {
		this.note = note;
	}
	
	
}
