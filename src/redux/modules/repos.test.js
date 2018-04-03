import { ActionsObservable } from 'redux-observable'
import { Observable } from 'rxjs'

import { loadRepos } from './repos'

describe('admin/permissions action creators', () => {
  describe('Actions to load all permissions', () => {
    it('should create an action to load all permissions', () => {
      const expectedAction = {
        type: 'repos/LOAD',
        payload: {
          name: 'foo',
        },
      }
      expect(loadRepos('foo')).toEqual(expectedAction)
    })
  })
})
