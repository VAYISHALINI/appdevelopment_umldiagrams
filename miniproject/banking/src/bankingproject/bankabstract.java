package bankingproject;

import java.sql.Connection;
import java.sql.SQLException;

public abstract class bankabstract {
   public  abstract void createAccount(Connection conn)  throws SQLException;
   public  abstract void makeDeposit(Connection conn)  throws SQLException;
   public  abstract void makeWithdrawal(Connection conn)  throws SQLException;
   public  abstract void checkBalance(Connection conn)  throws SQLException;
   public  abstract void createAccount(Connection conn,String accounttype)  throws SQLException;
   public abstract boolean checkCredentials(String email, String password,Connection connection)  throws SQLException;
}
