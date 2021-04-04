package com.highradius.m1;

import java.io.BufferedReader;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.sql.Connection;
import java.sql.Date;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;

public class MyJdbc {

	public static void main(String args[])
	{
		String JDBC_DRIVER="com.mysql.cj.jdbc.Driver";
		  Connection connection=null;
		  String DbUrlCaseOne="jdbc:mysql://localhost:3306/h2h_internship?rewriteBatchedStatements=true";
		  String userName="root";
		  String password="root";
		  PreparedStatement pStatement=null;
			try 
			{
	 
				Class.forName(JDBC_DRIVER);

				connection = DriverManager.getConnection(DbUrlCaseOne,userName,password);
				 
				String insertSQL = "INSERT INTO invoice_details (business_code,cust_number,name_customer,clear_date,business_year,doc_id,posting_date,document_create_date,document_create_date1,due_in_date,invoice_currency,document_type,posting_id,area_business,total_open_amount,baseline_create_date,cust_payment_terms,invoice_id,isOpen) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
			     int batchSize = 2500;
			     // create Statement object
			     pStatement = connection.prepareStatement(insertSQL);
			     List<MyPojo> detailList = new ArrayList<>();
					Path pathToFile=Paths.get("C:\\Users\\KIIT\\Desktop\\HR\\1828049.csv");
					try(BufferedReader br=Files.newBufferedReader(pathToFile)){
						String row=br.readLine();
						while(row!=null)
						{
							String[] attributes=row.split(",");
							MyPojo details=getOneDetail(attributes);
							detailList.add(details);
							row=br.readLine();
							System.out.println(details.toString());
						}
						
					}catch (Exception e) {
						// TODO: handle exception
						e.printStackTrace();
					}
					int j=0;
			      for(int i = 0; i <detailList.size() ; i++){
			    	  System.out.println("Executing row number "+j);
			    	  j++;
			    	  MyPojo detail=detailList.get(i);
			    	 
			    	  pStatement.setString(1, detail.getBusinessCode());               
			    	  pStatement.setObject(2, detail.getCustNumber());
			    	  pStatement.setString(3, detail.getCustName());			    	
			    	  pStatement.setDate(4, detail.getClearDate());
			    	  pStatement.setObject(5, detail.getBusinessYear());
			    	  pStatement.setObject(6, detail.getDocId());
			    	  pStatement.setDate(7, detail.getPostingDate());
			    	  pStatement.setDate(8, detail.getDocumentCreateDate());
			    	  pStatement.setDate(9, detail.getDocumentCreateDate1());
			    	  pStatement.setDate(10, detail.getDueInDate());
			    	  pStatement.setString(11,detail.getInvoiceCurrency());
			    	  pStatement.setString(12, detail.getDocumentType());
			    	  pStatement.setObject(13, detail.getPostingId());
			    	  pStatement.setString(14, detail.getAreaBusiness());
			    	  pStatement.setObject(15, detail.getTotalOpenAmount());
			    	  pStatement.setDate(16, detail.getBaseLineCreateDate());
			    	  pStatement.setString(17, detail.getCustomerPaymentTerms());
			    	  pStatement.setObject(18, detail.getInvoiceId());
			    	  pStatement.setObject(19, detail.getIsOpen());
			        // Keep adding to batch
			    	  pStatement.addBatch();
			        // Execute batch in chunks
			        if(i%batchSize == 0){
			        	pStatement.executeBatch();
			        }
			      }
			      // For the left over records
			      pStatement.executeBatch();  
			      if(j==50000)
			      {
			    	  System.out.println("Operation successfull, All "+j+" rows inserted in invoice_details table...");
			      }
		
				// CLOSING CONNECTIONS...
				connection.close();
				pStatement.close();
			}
			catch (SQLException sqlExceptione) 
			{
				// TODO: handle exception
				System.out.println("We have an Sql Exception");
				sqlExceptione.printStackTrace();
			}
			catch (Exception e) 
			{
				System.out.println("We have an error");
				e.printStackTrace();
				// TODO: handle exception
			}
			finally 
			{
				try 
				{
					if(pStatement!=null)
					{
						pStatement.close();
					}
				}
				catch (Exception e2)
				{
					// TODO: handle exception
					e2.printStackTrace();
				}
				try 
				{
					if(connection!=null)
					{
						connection.close();
					}
				}
				catch (Exception e) 
				{
					// TODO: handle exception
					e.printStackTrace();
				}
		}
		}
		private static MyPojo getOneDetail(String[] attributes) {
			// TODO Auto-generated method stub
			String businessCode,custName,customerPaymentTerms,areaBusiness,documentType,invoiceCurrency;
			Date clearDate,documentCreateDate,documentCreateDate1,baseLineCreateDate,dueInDate,postingDate;
			Integer custNumber,isOpen;
			Float postingId,businessYear;
			Double totalOpenAmount,invoiceId,docId;
			 
			
			 try {
				businessCode=attributes[0];
			} catch (Exception firstNameNUll) {
				// TODO: handle exception
				businessCode=null;
			}
			 try {
				 custNumber=Integer.valueOf(attributes[1]);
			 }
			 catch (Exception e) {
				// TODO: handle exception
				 custNumber=null;
			}
			 try {
				custName=attributes[2];
			} catch (Exception serialNumberNull) {
				// TODO: handle exception
				custName=null;
			}
			 try {
				 if (attributes[3].isEmpty()) {
					clearDate=null;
					
				}else {
				 clearDate=conversionOne(attributes[3]);
				}
			} catch (Exception aliasNull) {
				// TODO: handle exception
				clearDate=null;
			}
			 try {
				businessYear=Float.parseFloat(attributes[4]);
			} catch (Exception quoteNull) {
				// TODO: handle exception
				businessYear=null;
			}
			 try {
				docId=Double.parseDouble(attributes[5]);
				} catch (Exception quoteNull) {
					// TODO: handle exception
					docId=null;
				}
			 try {
					postingDate=convPostingDate(attributes[6]);
					} catch (Exception quoteNull) {
						// TODO: handle exception
						postingDate=null;
					}
			 try {
					documentCreateDate=conversion(attributes[7]);
					} catch (Exception quoteNull) {
						// TODO: handle exception
						documentCreateDate=null;
					}
			 try {
					documentCreateDate1=conversion(attributes[8]);
					} catch (Exception quoteNull) {
						// TODO: handle exception
						documentCreateDate1=null;
					}
			 try {
					dueInDate=conversion(attributes[9]);
					} catch (Exception quoteNull) {
						// TODO: handle exception
						dueInDate=null;
					}
			 try {
					invoiceCurrency=attributes[10];
					} catch (Exception quoteNull) {
						// TODO: handle exception
						invoiceCurrency=null;
					}
			 try {
					documentType=attributes[11];
					} catch (Exception quoteNull) {
						// TODO: handle exception
						documentType=null;
					}
			 try {
					postingId=Float.parseFloat(attributes[12]);
					} catch (Exception quoteNull) {
						// TODO: handle exception
						postingId=null;
					}
			 try {
					areaBusiness=attributes[13];
					if(areaBusiness.isEmpty())
					{
						areaBusiness=null;
					}
					} catch (Exception quoteNull) {
						// TODO: handle exception
						areaBusiness=null;
					}
			 try {
					totalOpenAmount=Double.parseDouble(attributes[14]);
					} catch (Exception quoteNull) {
						// TODO: handle exception
						totalOpenAmount=null;
					}
			 try {
					baseLineCreateDate=conversion(attributes[15]);
					} catch (Exception quoteNull) {
						// TODO: handle exception
						baseLineCreateDate=null;
					}
			 try {
					customerPaymentTerms=attributes[16];
					} catch (Exception quoteNull) {
						// TODO: handle exception
						customerPaymentTerms=null;
					}
			 try {
					invoiceId=Double.parseDouble(attributes[17]);
					} catch (Exception quoteNull) {
						// TODO: handle exception
						invoiceId=null;
					}
			 try {
					isOpen=Integer.parseInt(attributes[18]);
					} catch (Exception quoteNull) {
						// TODO: handle exception
						isOpen=0;
					}
			 MyPojo detail=new MyPojo(businessCode, custNumber, custName, clearDate, businessYear, docId, postingDate, documentCreateDate,documentCreateDate1, dueInDate, invoiceCurrency, documentType, postingId, areaBusiness, totalOpenAmount, baseLineCreateDate, customerPaymentTerms, invoiceId, isOpen);
			return detail;
		}

		public static Date conversion(String s) {
			try {
				SimpleDateFormat simpleDateFormat=new SimpleDateFormat("yyyyMMdd");
				Date date = new Date(simpleDateFormat.parse(s).getTime());
			
			return date;
			}
			catch(Exception e) {
			e.printStackTrace();
			}
			return null;

			}

			public static Date conversionOne(String s) 
			{
				try 
				{
					SimpleDateFormat simpleDateFormat=new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
					Date date = new Date(simpleDateFormat.parse(s).getTime());
					return date;
				}
				catch(Exception e) 
				{
					e.printStackTrace();
				}
			
				return null;
					    
			}
			public static Date convPostingDate(String s) {
				try {
					SimpleDateFormat simpleDateFormat=new SimpleDateFormat("yyyy-MM-dd");
					Date date = new Date(simpleDateFormat.parse(s).getTime());
				return date;
				}
				catch(Exception e) {
				e.printStackTrace();
				}
				return null;

				}
}
