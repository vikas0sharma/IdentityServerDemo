using IdentityServer4.EntityFramework.DbContexts;
using IdentityServer4.EntityFramework.Options;
using Microsoft.EntityFrameworkCore;

namespace AuthorizationServer.Persistence
{
    public class AuthPersistedGrantDbContext : PersistedGrantDbContext<AuthPersistedGrantDbContext>
    {
        public AuthPersistedGrantDbContext(DbContextOptions<AuthPersistedGrantDbContext> options, OperationalStoreOptions storeOptions) : base(options, storeOptions)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.HasDefaultSchema("Identity");
        }
    }
}
