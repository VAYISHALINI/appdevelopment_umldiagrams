package bankingproject;

import java.sql.*;
import java.util.*;
public class Bankoperation extends bankabstract{
  
 
    @Override
    public  void createAccount(Connection conn)  throws SQLException{
    	Scanner scanner = new Scanner(System.in);
    	userdetails user=new userdetails();
        System.out.print("Enter username: ");
        user.setUsername(scanner.next());
        
        System.out.print("Enter mobile number: ");
        user.setMobileno(scanner.nextLong());
        
        System.out.print("Enter address: ");
        user.setAddress(scanner.next());
//        System.out.println();
        System.out.print("Enter email ID: ");
        user.setEmailid(scanner.next());
        
        System.out.print("Enter password: ");
        user.setPassword(scanner.next());
        
        System.out.print("Enter account number: ");
        user.setAccountno(scanner.next());
        
        System.out.print("Enter account balance: ");
       user.setAccountbalance(scanner.nextDouble());
       String accountype="savings";
        user.setAccountype(accountype);
        String insertSQL = "INSERT INTO userdetails (username, mobileno, address, emailid,password, accountno,accountbalance,accountype)"
                + "VALUES (?, ?, ?, ?, ?,?,?,?)";
        
        try (PreparedStatement pstmt = conn.prepareStatement(insertSQL)) {
            pstmt.setString(1, user.getUsername());
            pstmt.setLong(2, user.getMobileno());
            pstmt.setString(3, user.getAddress());
            pstmt.setString(4,user.getEmailid());
            pstmt.setString(5, user.getPassword());
            pstmt.setString(6, user.getAccountno());
            pstmt.setDouble(7, user.getAccountbalance());
            pstmt.setString(8, user.getAccountype());
            int rowsAffected = pstmt.executeUpdate();
            if (rowsAffected > 0) {
                System.out.println("Account creation successful!");
            } else {
                System.out.println("Failed to create account.");
            }
        }
       
    }
    
    @Override
    public  void createAccount(Connection conn,String accounttype)  throws SQLException{
    	Scanner scanner = new Scanner(System.in);
    	userdetails user=new userdetails();
        System.out.print("Enter username: ");
        user.setUsername(scanner.next());
        
        System.out.print("Enter mobile number: ");
        user.setMobileno(scanner.nextLong());
        
        System.out.print("Enter address: ");
        user.setAddress(scanner.next());
//        System.out.println();
        System.out.print("Enter email ID: ");
        user.setEmailid(scanner.next());
        
        System.out.print("Enter password: ");
        user.setPassword(scanner.next());
        System.out.print("Enter account number: ");
        user.setAccountno(scanner.next());
        
        System.out.print("Enter account balance: ");
       user.setAccountbalance(scanner.nextDouble());
      
       user.setAccountype(accounttype);
        String insertSQL = "INSERT INTO userdetails (username, mobileno, address, emailid,password, accountno,accountbalance,accounttype)"
                + "VALUES (?, ?, ?, ?, ?,?,?,?)";
        
        try (PreparedStatement pstmt = conn.prepareStatement(insertSQL)) {
            pstmt.setString(1, user.getUsername());
            pstmt.setLong(2, user.getMobileno());
            pstmt.setString(3, user.getAddress());
            pstmt.setString(4,user.getEmailid());
            pstmt.setString(5, user.getPassword());
            pstmt.setString(6, user.getAccountno());
            pstmt.setDouble(7, user.getAccountbalance());
            pstmt.setString(8, user.getAccountype());
            int rowsAffected = pstmt.executeUpdate();
            if (rowsAffected > 0) {
                System.out.println("Account creation successful!");
            } else {
                System.out.println("Failed to create account.");
            }
        }
       
    }
    @Override
    public  void makeDeposit(Connection conn)  throws SQLException{
    	Scanner scanner = new Scanner(System.in);
        System.out.print("Enter account number: ");
        String accountno = scanner.nextLine();
        
        System.out.print("Enter deposit amount: ");
        double depositAmount = Double.parseDouble(scanner.nextLine());

        String updateSQL = "UPDATE userdetails  SET accountbalance = accountbalance + ? WHERE accountno = ?";
        String insertDepositSQL = "INSERT INTO deposits (accountno, depositedamount) VALUES (?, ?)";
        
        try (PreparedStatement pstmt = conn.prepareStatement(updateSQL);
             PreparedStatement depositStmt = conn.prepareStatement(insertDepositSQL)) {
            pstmt.setDouble(1, depositAmount);
            pstmt.setString(2, accountno);
            
            int rowsAffected = pstmt.executeUpdate();
            if (rowsAffected > 0) {
                depositStmt.setString(1, accountno);
                depositStmt.setDouble(2, depositAmount);
                depositStmt.executeUpdate();
                System.out.println("Deposit successful!");
            } else {
                System.out.println("Failed to deposit. Account not found.");
            }
        }
        
    }
    @Override
    public boolean checkCredentials(String email, String password,Connection connection) throws SQLException {
	    try
	    		{
	    			String query="SELECT * FROM userdetails where emailid=? and password=? ";
	    			PreparedStatement preparedStatement=connection.prepareStatement(query);
	    			preparedStatement.setString(1, email);
	    			preparedStatement.setString(2, password);
	    			
	    			ResultSet resultSet=preparedStatement.executeQuery();
	    			return resultSet.next();
	    		}
	    catch(SQLException e)
	    {
	    	e.printStackTrace();
	    }
		return false;
	}
   @Override
    public  void makeWithdrawal(Connection conn)  throws SQLException{
    	Scanner scanner = new Scanner(System.in);
        System.out.print("Enter account number: ");
        String accountno = scanner.nextLine();

        System.out.print("Enter withdrawal amount: ");
        double withdrawalAmount = Double.parseDouble(scanner.nextLine());

        String updateSQL = "UPDATE userdetails SET accountbalance = accountbalance - ? WHERE accountno = ?";
        String insertWithdrawalSQL = "INSERT INTO withdrawals (accountno, withdrawedamount) VALUES (?, ?)";

        try (PreparedStatement pstmt = conn.prepareStatement(updateSQL);
             PreparedStatement withdrawalStmt = conn.prepareStatement(insertWithdrawalSQL)) {
            pstmt.setDouble(1, withdrawalAmount);
            pstmt.setString(2, accountno);

            int rowsAffected = pstmt.executeUpdate();
            if (rowsAffected > 0) {
                withdrawalStmt.setString(1, accountno);
                withdrawalStmt.setDouble(2, withdrawalAmount);
                withdrawalStmt.executeUpdate();
                System.out.println("Withdrawal successful!");
            } else {
                System.out.println("Failed to withdraw. Account not found or insufficient balance.");
            }
        }
    }
   @Override
    public  void checkBalance(Connection conn)  throws SQLException {
        // Implement SQL query to retrieve the balance for a given account
    	 Scanner scanner = new Scanner(System.in);
    	    System.out.print("Enter account number: ");
    	    String accountno = scanner.nextLine();

    	    String selectSQL = "SELECT accountbalance FROM userdetails WHERE accountno = ?";

    	    try (PreparedStatement pstmt = conn.prepareStatement(selectSQL)) {
    	        pstmt.setString(1, accountno);
    	        ResultSet rs = pstmt.executeQuery();

    	        if (rs.next()) {
    	            double balance = rs.getDouble("accountbalance");
    	            System.out.println("Current Balance: " + balance);
    	        } else {
    	            System.out.println("Account not found.");
    	        }
    	    }
    }
}
