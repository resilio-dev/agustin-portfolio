import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ISkill } from 'src/app/core/models/ISkill.model';

@Component({
  selector: 'app-skill-card',
  imports: [CommonModule],
  templateUrl: './skill-card.component.html',
  styleUrl: './skill-card.component.less'
})
export class SkillCardComponent {
  @Input() technology!: ISkill;
  showSkills = false;

  get skillTypeColor(): string {
    const map = {
      LANGUAGE: '#3b82f6',
      FRAMEWORK: '#9333ea',
      LIBRARY: '#22c55e',
      PLATFORM: '#f97316',
      SECURITY: '#14b8a6',
      TOOL: '#0055ffff',
      IDE: '#1aff00ff',
      DATABASE: '#00fff2ff',
      FORMAT: '#ffee00ff',
    };
    return map[this.technology.type] || '#8d919bff';
  }

  toggleList() {
    this.showSkills = !this.showSkills;
  }
}
