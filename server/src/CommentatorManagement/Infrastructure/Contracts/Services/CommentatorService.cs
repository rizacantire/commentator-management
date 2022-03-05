﻿using Application.Contracts.Repositories;
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
    public class CommentatorService : ServiceBase<Commentator, ICommentatorRepository>, ICommentatorService
    {
        public CommentatorService(ICommentatorRepository repository) : base(repository)
        {
        }
    }
}
