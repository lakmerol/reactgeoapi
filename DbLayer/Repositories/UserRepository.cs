using DbLayer.Entites;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DbLayer.Repositories
{
    public class UserRepository : IRepository<User>
    {
        private readonly ApplicationDbContext _context;

        public UserRepository(ApplicationDbContext context)
        {
            _context = context;
        }
        public IEnumerable<User> GetAll()
        {
            return _context.Set<User>().ToList();
        }

        public User GetById(int id)
        {
            return _context.Set<User>().Find(id);
        }
        public void Insert(User entity)
        {
            _context.Set<User>().Add(entity);
            _context.SaveChanges();
        }

        public void Update(User entity)
        {
            _context.Entry(entity).State = EntityState.Modified;
            _context.SaveChanges();
        }

        public void Delete(int id)
        {
            var entity = _context.Set<User>().Find(id);
            if (entity != null)
            {
                _context.Set<User>().Remove(entity);
                _context.SaveChanges();
            }
        }
    }
}
