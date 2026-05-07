import { test as baseTest } from '../core/fixtures/base-fixture';
import { HomePage } from '../page-object/home-page';
import { LoginPage } from '../page-object/login-page';
import { ProfilePage } from '../page-object/profile-page';
import { AccountPage } from '../page-object/account-page';
import { LoginWorkflow } from '../workflow/login-workflow';
import { LikePage } from '../page-object/like-page';
import { CollectionPage } from '../page-object/collection-page';

export const test = baseTest.extend<{
  homePage: HomePage;
  loginPage: LoginPage;
  profilePage: ProfilePage;
  accountPage: AccountPage;
  loginWorkflow: LoginWorkflow;
  likePage: LikePage;
  collectionPage: CollectionPage;
}>({
  homePage: async ({}, use) => {
    await use(new HomePage());
  },
  loginPage: async ({}, use) => {
    await use(new LoginPage());
  },
  profilePage: async ({}, use) => {
    await use(new ProfilePage()); 
  },
  accountPage: async ({}, use) => {
    await use(new AccountPage());
  },
  loginWorkflow: async ({ }, use) => {
    await use(new LoginWorkflow());
  },
  likePage: async ({}, use) => {
    await use(new LikePage());
  },
  collectionPage: async ({}, use) => {
    await use(new CollectionPage());
  },
});

export { expect } from '@playwright/test';
