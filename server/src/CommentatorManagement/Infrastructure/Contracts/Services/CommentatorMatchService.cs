using Application.Contracts.Repositories;
using Application.Contracts.Services;
using Domain.Entities;
using Infrastructure.Contracts.Services.Commons;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Contracts.Services
{
    public class CommentatorMatchService : ServiceBase<CommentatorMatch, ICommentatorMatchRepository>, ICommentatorMatchService
    {
        public CommentatorMatchService(ICommentatorMatchRepository repository) : base(repository)
        {
        }
        public CommentatorMatch GetByDetailQuery(int id)
        {
            var sqlQuery = "SELECT count(*) as totalMatch,sum(Homegoalcount) as homegoal,sum(Awaygoalcount) as awaygoal,sum(Totalgoalcount) as Totalgoal,sum(TeamAYellowCards) as homeYellow,sum(TeamARedCards) as homeRed,sum(TeamACardsNum) as homeTotalCard,+sum(TeamBYellowCards) as awayYellow,sum(TeamBRedCards) as awayRed,sum(TeamBCardsNum) as awayTotalCard from CommentatorMatchs inner join Matchs ON CommentatorMatchs.MatchId=Matchs.Id";

            var result = base.GetByDetailQuery(predicate:u=>u.commentatorId == id,query:sqlQuery);

            return result;
        }

        public Task<IReadOnlyList<CommentatorMatch>> GetAllDetails()
        {
            string[] includes = { "Commentator", "Match" };
            var list = base.GetAllAsync(includeStrings: includes);
            return list;
        }

        public async Task RemoveAsyncById(int id)
        {
            var removeItem =await base.GetByIdAsync(id);
            if(removeItem != null) await base.RemoveAsync(removeItem);

        }
    }
}
