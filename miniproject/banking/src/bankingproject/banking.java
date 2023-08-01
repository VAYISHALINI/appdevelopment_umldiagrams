package bankingproject;

import java.sql.Connection;
import java.sql.DriverManager;
import java.util.Scanner;
import java.util.*;

public class banking extends Bankoperation{
	    private static final String DB_URL = "jdbc:mysql://localhost:3306/bank";
	    private static final String DB_USER = "root";
	    private static final String DB_PASSWORD = "vayisha147";

	    public static void main(String[] args) {
	        try {
	            Class.forName("com.mysql.jdbc.Driver");
	            Connection conn = DriverManager.getConnection(DB_URL, DB_USER, DB_PASSWORD);
	            banking bankop=new banking();
	            Scanner scanner1 = new Scanner(System.in);
	            System.out.print("Are you a new user??yes/no : ");
	            String opt=scanner1.next();
	            if(opt.equals("yes")) {
	            	System.out.print("create your account\n");
	            	System.out.print("Enter your accoun type:");
                	String accounttype=scanner1.next();
                	if(accounttype=="savings") {
                	bankop.createAccount(conn);
                	accountmanagement();
                	}
                	else {
                	bankop.createAccount(conn, accounttype);
                	accountmanagement();
                	
                	}
	            }
	            else {
	            	System.out.print("Login to your Account\n");
	            	System.out.print("Your emailid:");
	        		String email=scanner1.next();
	        	
	        		System.out.print("Your password:");
	        		String password=scanner1.next();
	        		if(bankop.checkCredentials(email,password,conn))
	        		{
	        			System.out.println("Logged in!.Welcome");
	        			accountmanagement();
	        			
	        		}
	        		else
	        		{
	        			System.out.println("Invalid username or password");
	        		}
	        		
	            }
	            
	            
	        } catch (Exception e) {
	            e.printStackTrace();
	        }
	    }

	    private static String getUserInput(String message) {
	        System.out.print(message);
	        Scanner scanner = new Scanner(System.in);
	        return scanner.nextLine();
	    }
	    private static void accountmanagement() throws Exception {
	    	Scanner scanner1 = new Scanner(System.in);
	    	 banking bankop=new banking();
	    	 Class.forName("com.mysql.jdbc.Driver");
	            Connection conn = DriverManager.getConnection(DB_URL, DB_USER, DB_PASSWORD);
	    	while (true) {
                System.out.println("\nOptions:");
              
                System.out.println("1. Deposit");
                System.out.println("2. Withdraw");
                System.out.println("3. Check Balance");
                System.out.println("4. Exit");

                int choice = Integer.parseInt(getUserInput("Enter your choice (1/2/3/4): "));
              
                switch (choice) {
                    
                    case 1:
                    	bankop.makeDeposit(conn);
                        break;
                    case 2:
                    	bankop.makeWithdrawal(conn);
                        break;
                    case 3:
                    	bankop.checkBalance(conn);
                        break;
                    case 4:
                        System.out.println("Thank you for using the Banking App!");
                        conn.close();
                        System.exit(0);
                        break;
                    default:
                        System.out.println("Invalid choice. Please try again.");
                        break;
                }
            }
	    }

 }