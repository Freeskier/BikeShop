namespace Server.Authentication
{
    public interface IJwtAuthenticationManager
    {
        string Authenticate(string name, string password);
    }
} 