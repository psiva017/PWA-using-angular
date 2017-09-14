/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GitRepoListComponent } from './git-repo-list.component';

describe('GitRepoListComponent', () => {
  let component: GitRepoListComponent;
  let fixture: ComponentFixture<GitRepoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GitRepoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GitRepoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
