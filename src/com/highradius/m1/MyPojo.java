package com.highradius.m1;

import java.sql.Date;

public class MyPojo {

	private String businessCode;
	private Integer custNumber;
	private String custName;
	private Date clearDate;
	private Float businessYear;
	private Double docId;
	private Date postingDate;
	private Date documentCreateDate;
	private Date documentCreateDate1;
	private Date dueInDate;
	private String invoiceCurrency;
	private String documentType;
	private Float postingId;
	private String areaBusiness;
	private Double totalOpenAmount;
	private Date baseLineCreateDate;
	private String customerPaymentTerms;
	private Double invoiceId;
	private Integer isOpen;
	
	
	
	@Override
	public String toString() {
		return "MyPojo [businessCode=" + businessCode + ", custNumber=" + custNumber + ", custName=" + custName
				+ ", clearDate=" + clearDate + ", businessYear=" + businessYear + ", docId=" + docId + ", postingDate="
				+ postingDate + ", documentCreateDate=" + documentCreateDate + ", documentCreateDate1="
				+ documentCreateDate1 + ", dueInDate=" + dueInDate + ", invoiceCurrency=" + invoiceCurrency
				+ ", documentType=" + documentType + ", postingId=" + postingId + ", areaBusiness=" + areaBusiness
				+ ", totalOpenAmount=" + totalOpenAmount + ", baseLineCreateDate=" + baseLineCreateDate
				+ ", customerPaymentTerms=" + customerPaymentTerms + ", invoiceId=" + invoiceId + ", isOpen=" + isOpen
				+ "]";
	}

	public MyPojo(String businessCode, Integer custNumber, String custName, Date clearDate, Float businessYear,
			Double docId, Date postingDate, Date documentCreateDate, Date documentCreateDate1, Date dueInDate,
			String invoiceCurrency, String documentType, Float postingId, String areaBusiness, Double totalOpenAmount,
			Date baseLineCreateDate, String customerPaymentTerms, Double invoiceId, Integer isOpen) {
		super();
		this.businessCode = businessCode;
		this.custNumber = custNumber;
		this.custName = custName;
		this.clearDate = clearDate;
		this.businessYear = businessYear;
		this.docId = docId;
		this.postingDate = postingDate;
		this.documentCreateDate = documentCreateDate;
		this.documentCreateDate1 = documentCreateDate1;
		this.dueInDate = dueInDate;
		this.invoiceCurrency = invoiceCurrency;
		this.documentType = documentType;
		this.postingId = postingId;
		this.areaBusiness = areaBusiness;
		this.totalOpenAmount = totalOpenAmount;
		this.baseLineCreateDate = baseLineCreateDate;
		this.customerPaymentTerms = customerPaymentTerms;
		this.invoiceId = invoiceId;
		this.isOpen = isOpen;
	}

	public MyPojo() {
		super();
	}

	public String getBusinessCode() {
		return businessCode;
	}

	public void setBusinessCode(String businessCode) {
		this.businessCode = businessCode;
	}

	public Integer getCustNumber() {
		return custNumber;
	}

	public void setCustNumber(Integer custNumber) {
		this.custNumber = custNumber;
	}

	public String getCustName() {
		return custName;
	}

	public void setCustName(String custName) {
		this.custName = custName;
	}

	public Date getClearDate() {
		return clearDate;
	}

	public void setClearDate(Date clearDate) {
		this.clearDate = clearDate;
	}

	public Float getBusinessYear() {
		return businessYear;
	}

	public void setBusinessYear(Float businessYear) {
		this.businessYear = businessYear;
	}

	public Double getDocId() {
		return docId;
	}

	public void setDocId(Double docId) {
		this.docId = docId;
	}

	public Date getPostingDate() {
		return postingDate;
	}

	public void setPostingDate(Date postingDate) {
		this.postingDate = postingDate;
	}

	public Date getDocumentCreateDate() {
		return documentCreateDate;
	}

	public void setDocumentCreateDate(Date documentCreateDate) {
		this.documentCreateDate = documentCreateDate;
	}

	public Date getDocumentCreateDate1() {
		return documentCreateDate1;
	}

	public void setDocumentCreateDate1(Date documentCreateDate1) {
		this.documentCreateDate1 = documentCreateDate1;
	}

	public Date getDueInDate() {
		return dueInDate;
	}

	public void setDueInDate(Date dueInDate) {
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

	public Float getPostingId() {
		return postingId;
	}

	public void setPostingId(Float postingId) {
		this.postingId = postingId;
	}

	public String getAreaBusiness() {
		return areaBusiness;
	}

	public void setAreaBusiness(String areaBusiness) {
		this.areaBusiness = areaBusiness;
	}

	public Double getTotalOpenAmount() {
		return totalOpenAmount;
	}

	public void setTotalOpenAmount(Double totalOpenAmount) {
		this.totalOpenAmount = totalOpenAmount;
	}

	public Date getBaseLineCreateDate() {
		return baseLineCreateDate;
	}

	public void setBaseLineCreateDate(Date baseLineCreateDate) {
		this.baseLineCreateDate = baseLineCreateDate;
	}

	public String getCustomerPaymentTerms() {
		return customerPaymentTerms;
	}

	public void setCustomerPaymentTerms(String customerPaymentTerms) {
		this.customerPaymentTerms = customerPaymentTerms;
	}

	public Double getInvoiceId() {
		return invoiceId;
	}

	public void setInvoiceId(Double invoiceId) {
		this.invoiceId = invoiceId;
	}

	public Integer getIsOpen() {
		return isOpen;
	}

	public void setIsOpen(Integer isOpen) {
		this.isOpen = isOpen;
	}
	
	
}
