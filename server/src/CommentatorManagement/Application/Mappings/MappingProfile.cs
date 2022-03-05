using Application.Models;
using AutoMapper;
using Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Mappings
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<CommentatorMatch, AddCommentatorMatchDto>().ReverseMap();
            CreateMap<Match, MatchDto>().ReverseMap();
            CreateMap<Match, MatchDto>();

            CreateMap<Match, CommentatorMatchDto>().ReverseMap();
            CreateMap<CommentatorMatch, CommentatorMatchDto>().ReverseMap();


        }
    }
}
