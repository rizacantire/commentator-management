using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Models
{
    public class TotalGoalDto
    {
        public TotalGoalDto(int totalGoal, int count)
        {
            TotalGoal = totalGoal;
            Count = count;
        }

        public int TotalGoal { get; set; }
        public int Count { get; set; }
    }
}
