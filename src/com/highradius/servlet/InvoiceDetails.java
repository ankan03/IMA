package com.highradius.servlet;

import java.sql.Date;
import java.text.SimpleDateFormat;

import com.google.gson.annotations.Expose;

public class InvoiceDetails {
	@Expose private String businessCode;
	@Expose private String custNumber;
	@Expose private String nameCustomer;
	@Expose private String clearDate;
	@Expose private String businessYear;
	@Expose private String docId;
	@Expose private String postingDate;
	@Expose private String documentCreateDate;
	@Expose private String documentCreateDate1;
	@Expose private String dueInDate;
	@Expose private String invoiceCurrency;
	@Expose private String documentType;
	@Expose private String postingId;
	@Expose private String areaBusiness;
	@Expose private String totalOpenAmount;
	@Expose private String baselineCreateDate;
	@Expose private String custPaymentTerms;
	@Expose private String invoiceId;
	@Expose private String isOpen;
	@Expose private String notes;
	
	
	@Override
	public String toString() {
		return "InvoiceDetails [businessCode=" + businessCode + ", custNumber=" + custNumber + ", nameCustomer="
				+ nameCustomer + ", clearDate=" + clearDate + ", businessYear=" + businessYear + ", docId=" + docId
				+ ", postingDate=" + postingDate + ", documentCreateDate=" + documentCreateDate
				+ ", documentCreateDate1=" + documentCreateDate1 + ", dueInDate=" + dueInDate + ", invoiceCurrency="
				+ invoiceCurrency + ", documentType=" + documentType + ", postingId=" + postingId + ", areaBusiness="
				+ areaBusiness + ", totalOpenAmount=" + totalOpenAmount + ", baselineCreateDate=" + baselineCreateDate
				+ ", custPaymentTerms=" + custPaymentTerms + ", invoiceId=" + invoiceId + ", isOpen=" + isOpen
				+ ", notes=" + notes + ", getBusinessCode()=" + getBusinessCode() + ", getCustNumber()="
				+ getCustNumber() + ", getNameCustomer()=" + getNameCustomer() + ", getClearDate()=" + getClearDate()
				+ ", getBusinessYear()=" + getBusinessYear() + ", getDocId()=" + getDocId() + ", getPostingDate()="
				+ getPostingDate() + ", getDocumentCreateDate()=" + getDocumentCreateDate()
				+ ", getDocumentCreateDate1()=" + getDocumentCreateDate1() + ", getDueInDate()=" + getDueInDate()
				+ ", getInvoiceCurrency()=" + getInvoiceCurrency() + ", getDocumentType()=" + getDocumentType()
				+ ", getPostingId()=" + getPostingId() + ", getAreaBusiness()=" + getAreaBusiness()
				+ ", getTotalOpenAmount()=" + getTotalOpenAmount() + ", getBaselineCreateDate()="
				+ getBaselineCreateDate() + ", getCustPaymentTerms()=" + getCustPaymentTerms() + ", getInvoiceId()="
				+ getInvoiceId() + ", getIsOpen()=" + getIsOpen() + ", getNotes()=" + getNotes() + ", getClass()="
				+ getClass() + ", hashCode()=" + hashCode() + ", toString()=" + super.toString() + "]";
	}
	public String getBusinessCode() {
		return businessCode;
	}
	public void setBusinessCode(String businessCode) {
		this.businessCode = businessCode;
	}
	public String getCustNumber() {
		return custNumber;
	}
	public void setCustNumber(String custNumber) {
		this.custNumber = custNumber;
	}
	public String getNameCustomer() {
		return nameCustomer;
	}
	public void setNameCustomer(String nameCustomer) {
		this.nameCustomer = nameCustomer;
	}
	public String getClearDate() {
		return clearDate;
	}
	public void setClearDate(String clearDate) {
		this.clearDate = clearDate;
	}
	public String getBusinessYear() {
		return businessYear;
	}
	public void setBusinessYear(String businessYear) {
		this.businessYear = businessYear;
	}
	public String getDocId() {
		return docId;
	}
	public void setDocId(String docId) {
		this.docId = docId;
	}
	public String getPostingDate() {
		return postingDate;
	}
	public void setPostingDate(String postingDate) {
		this.postingDate = postingDate;
	}
	public String getDocumentCreateDate() {
		return documentCreateDate;
	}
	public void setDocumentCreateDate(String documentCreateDate) {
		this.documentCreateDate = documentCreateDate;
	}
	public String getDocumentCreateDate1() {
		return documentCreateDate1;
	}
	public void setDocumentCreateDate1(String documentCreateDate1) {
		this.documentCreateDate1 = documentCreateDate1;
	}
	public String getDueInDate() {
		return dueInDate;
	}
	public void setDueInDate(String dueInDate) {
		this.dueInDate = dueInDate;
	}
	public String getInvoiceCurrency() {
		return invoiceCurrency;
	}
	public void setInvoiceCurrency(String invoiceCurrency) {
		this.invoiceCurrency = invoiceCurrency;
	}
	public String getDocumentType() {
		return documentType;
	}
	public void setDocumentType(String documentType) {
		this.documentType = documentType;
	}
	public String getPostingId() {
		return postingId;
	}
	public void setPostingId(String postingId) {
		this.postingId = postingId;
	}
	public String getAreaBusiness() {
		return areaBusiness;
	}
	public void setAreaBusiness(String areaBusiness) {
		this.areaBusiness = areaBusiness;
	}
	public String getTotalOpenAmount() {
		return totalOpenAmount;
	}
	public void setTotalOpenAmount(String totalOpenAmount) {
		this.totalOpenAmount = totalOpenAmount;
	}
	public String getBaselineCreateDate() {
		return baselineCreateDate;
	}
	public void setBaselineCreateDate(String baselineCreateDate) {
		this.baselineCreateDate = baselineCreateDate;
	}
	public String getCustPaymentTerms() {
		return custPaymentTerms;
	}
	public void setCustPaymentTerms(String custPaymentTerms) {
		this.custPaymentTerms = custPaymentTerms;
	}
	public String getInvoiceId() {
		return invoiceId;
	}
	public void setInvoiceId(String invoiceId) {
		this.invoiceId = invoiceId;
	}
	public String getIsOpen() {
		return isOpen;
	}
	public void setIsOpen(String isOpen) {
		this.isOpen = isOpen;
	}
	public String getNotes() {
		return notes;
	}
	public void setNotes(String notes) {
		this.notes = notes;
	}
	
	
}
